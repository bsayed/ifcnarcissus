/* -*- Mode: JS; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set sw=4 ts=4 et tw=78:
 * ***** BEGIN LICENSE BLOCK *****
 *
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the Narcissus JavaScript engine.
 *
 * The Initial Developer of the Original Code is
 * Brendan Eich <brendan@mozilla.org>.
 * Portions created by the Initial Developer are Copyright (C) 2004
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Bassam Sayed <bassam@ece.uvic.ca>
 *   Tom Austin <taustin@ucsc.edu>
 *   Brendan Eich <brendan@mozilla.org>
 *   Shu-Yu Guo <shu@rfrn.org>
 *   Dave Herman <dherman@mozilla.com>
 *   Dimitris Vardoulakis <dimvar@ccs.neu.edu>
 *   Patrick Walton <pcwalton@mozilla.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/*
 * jsIfcRewrite: rewrite JavaScript statements to enforce information flow control.
 *
 * Currently rewritable:
 *
 * - expression functions
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./n', './jsdefs', './jslex'], function (Narcissus, definitions, lexer) {
    Narcissus.ifcRewriting = (function () {

        var definitions = Narcissus.definitions;
        var parser = Narcissus.parser;

        const Dict = definitions.Dict;

        eval(definitions.consts);

        function rewriteArrayInit(id, arrInit, nodeIdx, accumulator, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var secCls = "0";

            var numOfAddedStmts = hoistAnyExprInCallOrArrayInit(arrInit, nodeIdx, funcParams,
                lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            nodeIdx.idx += numOfAddedStmts;

            for (var p in arrInit.children) {

                // In case of array holes the node is null so we skip them
                // e.g. [1,2, ,3]
                if (arrInit.children[p] === null)
                    continue;

                // If one of the array elements is an identifier get its security
                // class and use oplus function to update array security class
                if (arrInit.children[p].type === IDENTIFIER) {
                    elemSecCls = exprSecLvl(arrInit.children[p], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    secCls += "," + elemSecCls;
                } else
                // If one of the array elements is object initialization, first
                // rewrite its properties and then get its security class and use
                // oplus function to update array security class.
                if (arrInit.children[p].type === OBJECT_INIT) {
                    var tmpAccu = rewritePropInit(id + "[" + p + "]",
                        arrInit.children[p], nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    var objElemSecCls = "_ifc_max_(0";
                    for (var i in tmpAccu) {
                        objElemSecCls += "," + tmpAccu[i];
                        //accumulator.push(tmpAccu[i]);
                    }
                    objElemSecCls += ")";
                    secCls += "," + id + "['" + p + "']._sc=" + objElemSecCls;
                } else
                // If one of the array elements is an array, get its security
                // class and use oplus function to update array security class
                if (arrInit.children[p].type === ARRAY_INIT) {
                    var tmpAccu = rewriteArrayInit(id + "['" + arrInit.children[p].children[0].value + "']",
                        arrInit.children[p].children[1], nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    secCls += "," + id + "[" + p + "]._sc=" + tmpAccu.shift();
                } else {
                    //continue;
                    secCls = exprSecLvl(arrInit.children[p], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }

            }
            if (secCls !== "" && secCls !== "0")
                accumulator.splice(0, 0, secCls);

            return accumulator;
        }

        var hoistAnyExprInPropInit = function (objInit, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var hoistCount = 0;

            for (var p in objInit.children) {
                //var propName = objInit.children[p].children[0].value;
                var propExpr = objInit.children[p].children[1];

                if (propExpr.type !== STRING &&
                    propExpr.type !== NUMBER &&
                    propExpr.type !== IDENTIFIER &&
                    propExpr.type !== TRUE &&
                    propExpr.type !== FALSE &&
                    propExpr.type !== NULL) {
                    var tmpAssign = assignNodeToTmpIdnt(propExpr);
                    var tmpIdnt = tmpAssign.children[0];
                    objInit.children[p].children[1] = tmpIdnt;
                    tmpAssign.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                    hoistCount++;
                    // The rewriteAssignment in the case of calls it replaces the call stmt
                    // with an if-stmt effectively adding zero statements. So here we add
                    // the could of the added statements which could be one or zero.
                    hoistCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }
            }
            return hoistCount;
        };

        function rewritePropInit(id, objInit, nodeIdx, accumulator, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var secCls;

            var numOfAddedStmts = hoistAnyExprInPropInit(objInit, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            nodeIdx.idx += numOfAddedStmts;
            for (var p in objInit.children) {
                var propName = objInit.children[p].children[0].value;
                var rhsSecCls;
                // If the object initialization has a nested object initialization
                //
                if (objInit.children[p].children[1].type === OBJECT_INIT) {
                    var tmpAccu = rewritePropInit(id + "['" + objInit.children[p].children[0].value + "']",
                        objInit.children[p].children[1], nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    rhsSecCls = "_ifc_max_(0";
                    for (var i in tmpAccu) {
                        rhsSecCls += "," + tmpAccu[i];
                        // An optimization since the sub expr are included
                        //accumulator.splice(0, 0, tmpAccu[i]);
                    }
                    rhsSecCls += ")";
                    secCls = id + "['" + propName + "']._sc=" + rhsSecCls;
                } else if (objInit.children[p].children[1].type === ARRAY_INIT) {
                    var tmpAccu = rewriteArrayInit(id + "['" + objInit.children[p].children[0].value + "']",
                        objInit.children[p].children[1], nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    rhsSecCls = tmpAccu.shift();
                    secCls = id + "['" + propName + "']._sc=" + rhsSecCls;
                } else if (objInit.children[p].children[1].type === IDENTIFIER) {
                    rhsSecCls = exprSecLvl(objInit.children[p].children[1], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    secCls = "(" + id + "['" + propName + "'] instanceof Object)?" +
                    id + "['" + propName + "']._sc=" + rhsSecCls + " : "
                    + id + "['" + propName + "_sc']=" + rhsSecCls;
                } else {
                    secCls = exprSecLvl(objInit.children[p].children[1], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }
                if (secCls !== "" && secCls !== "0")
                    accumulator.splice(0, 0, secCls);
            }
            return accumulator;
        }

        function hoistCallsOrIndexInDotExpr(dotNode, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var hoistCount = 0;
            // Keep diving in until we get the id of the array or object
            while (dotNode.children.length != 0) {
                if (dotNode.children[0].type === CALL ||
                    dotNode.children[0].type === INDEX) {

                    var tmpAssign = assignNodeToTmpIdnt(dotNode.children[0]);
                    //var tmpIdnt = tmpAssign.children[0].children[0];
                    var tmpIdnt = tmpAssign.children[0];
                    dotNode.children[0] = tmpIdnt;
                    tmpAssign.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                    hoistCount++;
                    // The rewriteAssignment in the case of calls it replaces the call stmt
                    // with an if-stmt effectively adding zero statements. So here we add
                    // the could of the added statements which could be one or zero.
                    hoistCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }

                dotNode = dotNode.children[0];
            }

            // Every hoist results in 2 statements so multiply by 2
            return hoistCount;
        }


        function hoistAnyExprInIndex(indexNode, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            //if( indexNode.children[1].type === INCREMENT ||
            //    indexNode.children[1].type === DECREMENT) {
            //    if(indexNode.children[1].children[0].type === DOT) {
            //        var addedStmtsCount = hoistCallsOrIndexInDotExpr(indexNode.children[1].children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            //        nodeIdx.idx += addedStmtsCount;
            //    } else if(indexNode.children[1].children[0].type === CALL) {
            //        addedStmtsCount = hoistAnyExprInCallOrArrayInit(indexNode.children[1].children[0]nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            //        nodeIdx.idx += addedStmtsCount;
            //    }
            //}

            var hoistCount = 0;
            // Keep diving in until we get the id of the array or object
            while (indexNode.children.length != 0) {
                if (indexNode.children[1].type !== STRING &&
                    indexNode.children[1].type !== NUMBER &&
                    indexNode.children[1].type !== IDENTIFIER &&
                    indexNode.children[1].type !== NULL &&
                    indexNode.children[1].type !== TRUE &&
                    indexNode.children[1].type !== FALSE) {

                    var tmpAssign = assignNodeToTmpIdnt(indexNode.children[1]);
                    //var tmpIdnt = tmpAssign.children[0].children[0];
                    var tmpIdnt = tmpAssign.children[0];
                    indexNode.children[1] = tmpIdnt;
                    tmpAssign.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                    hoistCount++;
                    // The rewriteAssignment in the case of calls it replaces the call stmt
                    // with an if-stmt effectively adding zero statements. So here we add
                    // the could of the added statements which could be one or zero.
                    hoistCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }

                indexNode = indexNode.children[0];
            }

            // Every hoist results in 2 statements so multiply by 2
            return hoistCount;
        }

        function genIfcPopStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var newAssignStmt = "", rhsSecCls = "_ifc_stack_.pop()";
            if (lhs.type === DOT) {
                newAssignStmt = "if(" + lhsName + " instanceof Object) {" +
                lhsName + "._sc=" + rhsSecCls + ";" +
                lhsObj + "._sc=(" + lhsName + "._sc >=" + lhsObj + "._sc)? " + lhsName + "._sc :" + lhsObj + "._sc" +
                "} else{ ";

                lhsName = lhsObj + "['" + lhsIdxNode.value + "_sc']";
                newAssignStmt += lhsName + "=" + rhsSecCls + ";" +
                lhsObj + "._sc=(" + lhsName + "._sc >=" + lhsObj + "._sc)? " + lhsName + "._sc :" + lhsObj + "._sc}"
            } else if (lhs.type === INDEX) {
                newAssignStmt = "if(" + lhsObj + " instanceof Array) " + lhsObj + "._sc=_ifc_max_("
                + rhsSecCls + "," + lhsObj + "._sc" + "); else " + "if(" + lhsName + " instanceof Object) " +
                lhsName + "._sc=" + rhsSecCls + "; else {";
                lhsName = lhsObj + "['" + lhsIdxNode.value + "_sc']";
                newAssignStmt += lhsName + "=" + rhsSecCls + ";" +
                lhsObj + "._sc=(" + lhsName + "._sc >=" + lhsObj + "._sc)? " + lhsName + "._sc :" + lhsObj + "._sc}";
            } else {
                newAssignStmt = "if(" + lhsName + " instanceof Object) " +
                lhsName + "._sc=" + rhsSecCls + "; else ";
                lhsName = varKeyword + lhsName + "_sc";
                newAssignStmt += lhsName + "=" + rhsSecCls + ";";
            }

            return newAssignStmt;
        }

        function genIfcStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, rhsSecCls) {
            var newAssignStmt = "";
            if (lhs.type === DOT) {
                newAssignStmt = "if(" + lhsName + " instanceof Object && " + lhsName + " !== null) {" +
                lhsName + "._sc=_ifc_max_(" + pc + "," + rhsSecCls + ");" +
                lhsObj + "._sc=(" + lhsName + "._sc >=" + lhsObj + "._sc)?" + lhsName + "._sc :" + lhsObj + "._sc;" +
                "} else if(" + lhsName + " !== null){ ";

                lhsName = lhsObj + "['" + lhsIdxNode.value + "_sc']";
                newAssignStmt += lhsName + "=_ifc_max_(" + pc + "," + rhsSecCls + ");" +
                lhsObj + "._sc=(" + lhsName + ">=" + lhsObj + "._sc)?" + lhsName + ":" + lhsObj + "._sc}";
            } else if (lhs.type === INDEX) {
                newAssignStmt = "if(" + lhsObj + " instanceof Array) " + lhsObj + "._sc=_ifc_max_(" + pc + ","
                + rhsSecCls + "," + lhsObj + "._sc" + "); else " + "if(" + lhsName + " instanceof Object) " +
                lhsName + "._sc=_ifc_max_(" + pc + "," + rhsSecCls + ");" + " else {";
                lhsName = lhsObj + "['" + lhsIdxNode.value + "_sc']";
                newAssignStmt += lhsName + "=_ifc_max_(" + pc + "," + rhsSecCls + ");" +
                lhsObj + "._sc=(" + lhsName + ">=" + lhsObj + "._sc)?" + lhsName + ":" + lhsObj + "._sc}";
            } else {
                newAssignStmt = "if(" + lhsName + " instanceof Object && " + lhsName + " !== null)" +
                lhsName + "._sc=_ifc_max_(" + pc + "," + rhsSecCls + "); else if(" + lhsName + " !== null) ";
                lhsName = varKeyword + lhsName + "_sc";
                newAssignStmt += lhsName + "=_ifc_max_(" + pc + "," + rhsSecCls + ");";
            }

            return newAssignStmt;
        }

        function rewriteAssignment(node, nodeIdx, varAssign, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var newIfcStmts = [];
            var lhs = node.children[0];
            var rhs = node.children[1];
            var secClass = rhs._sc || 0;
            var lhsName, lhsObj, lhsIdxNode;
            var pc = (varAssign) ? "0" : "_$pc(0)", varKeyword = (varAssign) ? "var " : "";
            // A sanity check just in case what's on the lhs is not an
            // identifier, property, or an index
            if (lhs.type !== IDENTIFIER && lhs.type !== DOT && lhs.type !== INDEX)
                return;

            var hoistedStmtsCount = 0;
            if (lhs.type === INDEX) {
                hoistedStmtsCount = hoistAnyExprInIndex(lhs, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                nodeIdx.idx += hoistedStmtsCount;
            }
            if (lhs.type === DOT) {
                hoistedStmtsCount = hoistCallsOrIndexInDotExpr(lhs, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                nodeIdx.idx += hoistedStmtsCount;
            }


            if (rhs.type === ASSIGN) {
                var tmpAssign = JSON.parse(JSON.stringify(rhs));
                tmpAssign.ifcSynthetic = true;
                this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                hoistedStmtsCount = rewriteAssignment(tmpAssign, nodeIdx, false, funcParams, tmpAssign.children[0], lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                hoistedStmtsCount++;
                nodeIdx.idx += hoistedStmtsCount;
                rhs = node.children[1] = node.children[1].children[0];

            }

            if (lhs.type === DOT || lhs.type === INDEX) {
                var indexNode = lhs.children[0];
                lhsIdxNode = lhs.children[1];
                lhsIdxNode.parentType = lhs.type;
                var nameStk = [lhsIdxNode];
                var nodeStk = [lhsIdxNode];
                // Keep diving in until we get the id of the array or object
                while (indexNode.children.length != 0) {
                    indexNode.children[1].parentType = indexNode.type;
                    nameStk.push(indexNode.children[1]);
                    if (indexNode.type === INDEX)
                        nodeStk.push(indexNode.children[1]);
                    indexNode = indexNode.children[0];
                }
                lhsName = composeIndexExpr(indexNode.value, nameStk);
                // remove inner most element
                nameStk.shift();
                lhsObj = composeIndexExpr(indexNode.value, nameStk);
                if (lhs.type === INDEX)
                    for (var e in nodeStk) {
                        pc += "," + exprSecLvl(nodeStk[e], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,node.value);
                    }
            } else {
                lhsName = lhs.value;
            }

            var newAssignStmt;

            var accumulator = [];

            switch (rhs.type) {

                case THIS:
                {
                    newAssignStmt = lhsName + "._sc=_ifc_max_(" + pc + ",this._sc)";
                    newIfcStmts.splice(0, 0, newAssignStmt);
                    break;
                }
                /*
                 case IDENTIFIER:
                 {
                 var rhsSecCls = exprSecLvl(rhs, nodeIdx, funcParams);
                 var paramIdx = funcParams.indexOf(rhs.value);
                 var k, count;
                 for (k = this.ifcStk.length - 1, count = 0; k >= 0; k--, count++)
                 if (this.ifcStk[k].type === FUNCTION)
                 break;

                 newAssignStmt = genIfcStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, rhsSecCls);

                 newAssignStmt = "if(_ifc_stack_[stk.length-2 -" + count + "] >= " + paramIdx + "+1) " + newAssignStmt + "; else " + lhsName + "=0";

                 newIfcStmts.splice(0, 0, newAssignStmt);
                 break;
                 }
                 */
                /*
                 case DOT:
                 case INDEX:
                 {
                 var rhsSecCls = exprSecLvl(rhs, nodeIdx, funcParams);
                 newAssignStmt = genIfcStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, rhsSecCls);
                 newIfcStmts.splice(0, 0, newAssignStmt);
                 break;
                 }
                 */
                /*
                 case CALL:
                 {
                 pushCallArgsIntoStk(rhs, nodeIdx, funcParams, lhs, lhsName, lhsObj,
                 lhsIdxNode, pc, varKeyword,node.value);
                 break;
                 }
                 */

                default:
                {
                    var secCls = exprSecLvl(rhs, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, node.value);
                    if (secCls !== "") {
                        newAssignStmt = genIfcStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, secCls);
                        newIfcStmts.splice(0, 0, newAssignStmt);
                    }
                    break;

                }
            } // end switch-case

            var addedStmtCount = 0;
            for (var e in newIfcStmts) {
                if (newIfcStmts[e] !== "" && newIfcStmts[e] !== undefined) {
                    var newStmtNode = Narcissus.parser.parse(newIfcStmts[e], "rewriteAssignment:" + node.lineno + ":'" + newIfcStmts[e] + "'", 1);
                    // The parse function returns SCRIPT as root node so we take the
                    // first child.
                    newStmtNode = newStmtNode.children[0];
                    // Label newly created node as ifcSynthetic to avoid rewriting it
                    newStmtNode.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, newStmtNode);
                    addedStmtCount++;
                }
            }

            return addedStmtCount;
        }

        function hoistAnyExprInCallOrArrayInit(call, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var hoistCount = 0, exprList;

            if (call.type === ARRAY_INIT)
                exprList = call.children;
            else
                exprList = call.children[1].children;

            var tmp;
            // Keep diving in until we get the id of the array or object
            for (var e in exprList) {
                // If the array init or the function call have a whole
                if (exprList[e] === null)
                    continue;

                if (exprList[e].type !== STRING &&
                    exprList[e].type !== NUMBER &&
                    exprList[e].type !== IDENTIFIER &&
                    exprList[e].type !== TRUE &&
                    exprList[e].type !== FALSE &&
                    exprList[e].type !== NULL &&
                    exprList[e].type !== THIS) {
                    var tmpAssign = assignNodeToTmpIdnt(exprList[e]);
                    var tmpIdnt = tmpAssign.children[0];
                    exprList[e] = tmpIdnt;
                    tmpAssign.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                    hoistCount++;
                    // The rewriteAssignment in the case of calls it replaces the call stmt
                    // with an if-stmt effectively adding zero statements. So here we add
                    // the could of the added statements which could be one or zero.
                    hoistCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                }
            }
            return hoistCount;
        }

        function pushStrOntoStk(str, nodeIdx) {
            var pushFuncSecCls = "_ifc_stack_.push(_ifc_max_(" + str + "))";
            var newStmtNode = Narcissus.parser.parse(pushFuncSecCls, "<ifc rewrite>", 1);
            // The parse function returns SCRIPT as root node so we take the
            // first child.
            newStmtNode = newStmtNode.children[0];
            // Label newly created node as ifcSynthetic to avoid rewriting it
            newStmtNode.ifcSynthetic = true;
            this.currentBlockNode.children.splice(nodeIdx.idx, 0, newStmtNode);
        }

        function pushCallArgsIntoStk(call, nodeIdx, funcParams, lhs, lhsName, lhsObj,
                                     lhsIdxNode, pc, varKeyword, assignOp) {
            var funcSecCls, funcArgList, funcName, lhsNameStr = lhsName, isCallNew = false;

            var numOfAddedStmts = hoistAnyExprInCallOrArrayInit(call, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            nodeIdx.idx += numOfAddedStmts;

            funcArgList = call.children[1].children;

            if (lhs.type === DOT || lhs.type === INDEX)
                varKeyword = "";

            if (call.value === "new")
                isCallNew = true;

            var nameStk = [], extraIfStmtGuard="", fullFuncCallStr;
            if (call.children[0].type === FUNCTION ||
                call.children[0].type === IDENTIFIER)
                funcName = call.children[0].value;
            else {
                call = call.children[0];
                //var nodeStk = [lhsIdxNode];

                var addedStmtsCount = 0;
                if (call.children[0].type !== DOT && call.children[0].type !== INDEX &&
                    call.children[0].type !== STRING &&
                    call.children[0].type !== IDENTIFIER &&
                    call.children[0].type !== TRUE &&
                    call.children[0].type !== FALSE &&
                    call.children[0].type !== THIS) {
                    var tmpAssign = assignNodeToTmpIdnt(call.children[0]);
                    var tmpIdnt = tmpAssign.children[0];
                    call.children[0] = tmpIdnt;
                    this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                    tmpAssign.ifcSynthetic = true;
                    addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    addedStmtsCount++;
                }
                nodeIdx.idx += addedStmtsCount;

                // Keep diving in until we get the id of the array or object
                while (call.children[0].type === DOT ||
                call.children[0].type === INDEX) {
                    call.children[1].parentType = call.type;
                    nameStk.push(call.children[1]);
                    //nodeStk.push(indexNode.children[1]);
                    call = call.children[0];
                }
                call.children[1].parentType = call.type;
                nameStk.push( call.children[1]);
                var id = (call.children[0].type === STRING) ? '"' + call.children[0].value + '"' : call.children[0].value;
                funcName = composeIndexExpr(id, nameStk);
                var nameOfLastFunc = nameStk[0].value;
                nameStk.shift();
                var nameOfBeforeLastFunc = composeIndexExpr(id, nameStk);
                extraIfStmtGuard = "|| ("+nameOfBeforeLastFunc+"._sc !== undefined && ('call' ==='"+nameOfLastFunc+"' || 'apply' ==='"+nameOfLastFunc+"'))"
            }


            funcSecCls = funcName + "._sc";
            // we need to keep the actual function name before we and new keyword to it.
            var canonicalFuncName = funcName;

            // If this is a "new obj()" function call, add new to funcName
            if (isCallNew)
                funcName = "new " + funcName;

            // we already used nameStk in getting the funcName if it is a property method
            fullFuncCallStr = composeCallExpr(funcName, [], funcArgList);

            var newStmt = "if(("+canonicalFuncName+ " && " + funcSecCls + "!== undefined) "+extraIfStmtGuard+" ) {";

            if(extraIfStmtGuard !== "")
                funcSecCls = nameOfBeforeLastFunc+"._sc";


            var argSecCls, tmpVar = generateNextTempIdnt();
            newStmt += tmpVar + " = (_$pc(0) <=" + funcSecCls + ")?" + funcSecCls + ":_$pc(0);";
            //for (var i = funcArgList.length - 1; i >= 0; i--) {
            for (var i = 0; i < funcArgList.length; i++) {
                argSecCls = exprSecLvl(funcArgList[i], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);
                newStmt += "_ifc_stack_.push(" + argSecCls + ");";
            }

            newStmt += "_ifc_stack_.push(" + funcArgList.length + ");";

            newStmt += "_ifc_stack_.push(" + tmpVar + ");";

            newStmt += varKeyword + lhsNameStr + assignOp + fullFuncCallStr + ";";

            newAssignStmt = genIfcPopStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            newStmt += newAssignStmt;

            newStmt += "} else if("+canonicalFuncName+"){";
            newStmt += varKeyword + lhsNameStr + assignOp + fullFuncCallStr + ";";
            lhsName = lhsNameStr;
            var ifcMaxStr = "_ifc_max_(" + pc;
            for (var i = funcArgList.length - 1; i >= 0; i--) {
                argSecCls = exprSecLvl(funcArgList[i], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);
                ifcMaxStr += "," + argSecCls;
            }

            ifcMaxStr += ")";

            newAssignStmt = genIfcStmt(lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, ifcMaxStr);

            newStmt += newAssignStmt + "}";

            newStmtNode = Narcissus.parser.parse(newStmt, "pushCallArgsIntoStk:" + call.lineno + ":'" + newStmt + "'", 1);
            // The parse function returns SCRIPT as root node so we take the
            // first child.
            newStmtNode = newStmtNode.children[0];
            // Label newly created node as ifcSynthetic to avoid rewriting it
            newStmtNode.ifcSynthetic = true;
            this.currentBlockNode.children[nodeIdx.idx] = newStmtNode;

        }

        function rewriteDeclaration(decl, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var newIfcVars = [];
            var declCopy = [];

            var newStmt = "var $"
            if(decl.children.length > 1)
            {
                for(var i = decl.children.length -1; i >0;i--) {
                    newStmtNode = Narcissus.parser.parse(newStmt, "rewriteDeclaration:" + decl.lineno + ":'" + newStmt + "'", 1);
                    // The parse function returns SCRIPT as root node so we take the
                    // first child.
                    newStmtNode = newStmtNode.children[0];
                    newStmtNode.children[0] = decl.children[i];
                    this.currentBlockNode.children.splice(nodeIdx.idx+1, 0,newStmtNode) ;
                }
            }

            declCopy.push(decl.children[0]);
            decl.children = declCopy;

            decl.children.forEach(function (init,idx) {
                if (init.type === ASSIGN) {
                    var addedStmtsCount = rewriteAssignment(init, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    nodeIdx.idx += addedStmtsCount;

                } else {
                    newIfcVars.push(init.value + "_sc = 0");
                }
            });

            for (var newAssignExpr in newIfcVars) {
                var newAssignNode = Narcissus.parser.parse(newIfcVars[newAssignExpr], "<ifc rewrite>", 1);
                // parser.parse() always return the root node as a SCRIPT node so we take
                // the first child
                newAssignNode = newAssignNode.children[0];
                // Label newly created node as ifcSynthetic to avoid rewriting it
                newAssignNode.ifcSynthetic = true;
                decl.children.push(newAssignNode);
            }
        }

        var tempCounter = 0;

        function generateNextTempIdnt() {
            var name = "_$t" + tempCounter++;
            return name;
        }


        function rewriteFunction(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {

            var stmt = "";

            if (node.name === "")
                stmt = lhsName + "._sc = " + (node._sc || 0);
            else
                stmt = node.name + "._sc = " + (node._sc || 0);

            var newAssignStmtWithSemicolon = Narcissus.parser.parse(stmt, "rewriteFunction", 1);
            // parser.parse() always return the root node as a SCRIPT node so we take
            // the first child
            newAssignStmtWithSemicolon = newAssignStmtWithSemicolon.children[0];
            // Label newly created nodes as ifcSynthetic so we don't rewrite them.
            newAssignStmtWithSemicolon.ifcSynthetic = true;

            //Add a new stmt to assign the security class of the function.
            this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, newAssignStmtWithSemicolon);

            // since we added a statement for the function security class
            nodeIdx.idx++;

            this.ifcStk.push({type: node.type, labels: node.labels});
            // if the last statement of the function body is not a return statement
            // add a return statement
            if (node.body.children.length == 0) {
                var returnNode = Narcissus.parser.parse("function f(){return}", "rewriteFunction()", 1);
                returnNode = returnNode.children[0];
                node.body.children.push(returnNode.body.children[0]);
            } else if (node.body.children[node.body.children.length - 1].expression) {
                if (node.body.children[node.body.children.length - 1].expression.type !== RETURN) {
                    var returnNode = Narcissus.parser.parse("function f(){return}", "rewriteFunction()", 1);
                    returnNode = returnNode.children[0];
                    node.body.children.push(returnNode.body.children[0]);
                }
            } else if (node.body.children[node.body.children.length - 1].type !== RETURN) {
                var returnNode = Narcissus.parser.parse("function f(){return}", "rewriteFunction()", 1);
                returnNode = returnNode.children[0];
                node.body.children.push(returnNode.body.children[0]);
            }

            rewriteStatements(node.body, node.params);
            this.ifcStk.pop();

        }

        function rewriteCatchClauses(node, nodeIdx, funcParams) {
            var catches = node.catchClauses;

            // if we have no catch clauses add one.
            if (catches.length === 0) {
                var catchNode = Narcissus.parser.parse("try{}catch(e){_ifc_stack_.pop()}", "<ifc rewrite>", 1);
                catchNode = catchNode.children[0];
                // Taking the catch clause from the try-catch
                catchNode = catchNode.catchClauses[0];
                catchNode.ifcSynthetic = true;
                node.catchClauses.push(catchNode);
                return;
            }

            var popNode = Narcissus.parser.parse("_ifc_stack_.pop()", "<ifc rewrite>", 1);
            popNode = popNode.children[0];
            popNode.ifcSynthetic = true;
            // If we have one or more catch clauses rewrite all of them.
            // In the standard JavaScript only on catch clause is supported
            // but spider-monkey support more than one catch clause with garud
            // checks.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
            for (var i in catches) {
                rewriteStatements(catches[i].block, funcParams);
                // Add the ifc pop() call as the last statement for each catch clause.
                catches[i].block.push(popNode);
            }

        }

        function composeCallExpr(id, stk, callArgs) {
            var ids = "", args = "(";
            for (var i = stk.length - 1; i >= 0; i--)
                ids += "." + stk[i];

            if (callArgs.length > 0)
                args += (callArgs[0].type === STRING) ? "'" + callArgs[0].value + "'" : callArgs[0].value;

            for (i = 1; i < callArgs.length; i++)
                args += (callArgs[i].type === STRING) ? ",'" + callArgs[i].value + "'" : ("," + callArgs[i].value);

            return id + ids + args + ")";
        }

        function composeIndexExpr(id, stk) {
            var idxs = "";
            for (var i = stk.length - 1; i >= 0; i--) {
                if(stk[i].parentType === INDEX) {
                    if (stk[i].type === STRING)
                        idxs += "['" + stk[i].value + "']";
                    else
                        idxs += "[" + stk[i].value + "]";
                } else if(stk[i].parentType === DOT || stk[i].parentType === CALL)
                    idxs += "['" + stk[i].value + "']";
                else
                    throw new Error("composeIndexExpr wrong type: "+ definitions.tokens[stk[i].type]);
            }
            return id + idxs;
        }

        function exprSecLvl(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, assignOp) {
            if (node === null)
                return "0";

            switch (node.type) {

                case CALL:
                case NEW_WITH_ARGS:
                    pushCallArgsIntoStk(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword, assignOp);
                    return "";

                case COMMA:
                    var secCls = "_ifc_max_(" + pc;
                    var addedStmtsCount = 0;
                    for (e in node.children) {
                        if (node.children[e].type !== STRING &&
                            node.children[e].type !== NUMBER &&
                            node.children[e].type !== IDENTIFIER &&
                            node.children[e].type !== TRUE &&
                            node.children[e].type !== FALSE &&
                            node.children[e].type !== NULL &&
                            node.children[e].type !== THIS) {
                            if (node.children[e].type === GROUP) {
                                if (node.children[e].children[0].type === ASSIGN) {
                                    tmpAssign = node.children[e] = node.children[e].children[0];
                                } else {
                                    tmpAssign = assignNodeToTmpIdnt(node.children[e]);
                                }
                            } else if (node.children[e].type === ASSIGN) {
                                tmpAssign = node.children[e];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[e]);
                            }
                            var tmpIdnt = tmpAssign.children[0];
                            node.children[e] = tmpIdnt;
                            this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                            tmpAssign.ifcSynthetic = true;
                            addedStmtsCount++;
                            addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                            //nodeIdx.idx += addedStmtsCount;
                        }
                        nodeIdx.idx += addedStmtsCount;
                        var tmpSecCls = exprSecLvl(node.children[e], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);
                        if (tmpSecCls !== "" && tmpSecCls !== "0")
                            secCls = secCls + "," + tmpSecCls;
                    }
                    return secCls + ")";

                case ASSIGN:
                    var addedStmtsCount =
                        rewriteAssignment(node, nodeIdx, false, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);
                    nodeIdx.idx += addedStmtsCount;
                    return "";

                case HOOK:
                {
                    var addedStmtsCount = 0, tmpAssign = undefined;
                    if (node.children[0].type !== STRING &&
                        node.children[0].type !== NUMBER &&
                        node.children[0].type !== IDENTIFIER &&
                        node.children[0].type !== TRUE &&
                        node.children[0].type !== FALSE &&
                        node.children[0].type !== NULL &&
                        node.children[0].type !== THIS) {
                        if (node.children[0].type === GROUP) {
                            if (node.children[0].children[0].type === ASSIGN) {
                                tmpAssign = node.children[0] = node.children[0].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                            }
                        } else if (node.children[0].type === ASSIGN) {
                            tmpAssign = node.children[0];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[0] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount++;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        //nodeIdx.idx += addedStmtsCount;
                    }
                    if (node.children[1].type !== STRING &&
                        node.children[1].type !== NUMBER &&
                        node.children[1].type !== IDENTIFIER &&
                        node.children[1].type !== TRUE &&
                        node.children[1].type !== FALSE &&
                        node.children[1].type !== NULL &&
                        node.children[1].type !== THIS) {
                        if (node.children[1].type === GROUP) {
                            if (node.children[1].children[0].type === ASSIGN) {
                                tmpAssign = node.children[1] = node.children[1].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[1]);
                            }
                        } else if (node.children[1].type === ASSIGN) {
                            tmpAssign = node.children[1];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[1]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[1] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount++;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        //nodeIdx.idx += addedStmtsCount;
                    }
                    if (node.children[2].type !== STRING &&
                        node.children[2].type !== NUMBER &&
                        node.children[2].type !== IDENTIFIER &&
                        node.children[2].type !== TRUE &&
                        node.children[2].type !== FALSE &&
                        node.children[2].type !== NULL &&
                        node.children[2].type !== THIS) {
                        if (node.children[2].type === GROUP) {
                            if (node.children[2].children[0].type === ASSIGN) {
                                tmpAssign = node.children[2] = node.children[2].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[2]);
                            }
                        } else if (node.children[2].type === ASSIGN) {
                            tmpAssign = node.children[2];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[2]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[2] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount++;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        //nodeIdx.idx += addedStmtsCount;
                    }
                    nodeIdx.idx += addedStmtsCount;
                    var e1 = exprSecLvl(node.children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp),
                        e2 = exprSecLvl(node.children[1], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp),
                        e3 = exprSecLvl(node.children[2], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);

                    var secCls = "_ifc_max_(" + pc + "," + e1 + "," + e2 + "," + e3 + ")";
                    return secCls;
                }

                case LET_BLOCK:
                    node.variables.children.forEach(function (init) {
                        if (init.initializer)
                            init.initializer = rewriteExpression(init.initializer);
                    });
                    node.expression = rewriteExpression(node.expression);
                    return node;

                case OR:
                case AND:
                case BITWISE_OR:
                case BITWISE_XOR:
                case BITWISE_AND:
                case EQ:
                case NE:
                case STRICT_EQ:
                case STRICT_NE:
                case LT:
                case LE:
                case GT:
                case GE:
                case IN:
                case INSTANCEOF:
                case LSH:
                case RSH:
                case URSH:
                case PLUS:
                case MINUS:
                case MUL:
                case DIV:
                case MOD:
                {
                    var addedStmtsCount = 0, tmpAssign;
                    if (node.children[0].type !== STRING &&
                        node.children[0].type !== NUMBER &&
                        node.children[0].type !== IDENTIFIER &&
                        node.children[0].type !== TRUE &&
                        node.children[0].type !== FALSE &&
                        node.children[0].type !== NULL &&
                        node.children[0].type !== THIS) {
                        if (node.children[0].type === GROUP) {
                            if (node.children[0].children[0].type === ASSIGN) {
                                tmpAssign = node.children[0] = node.children[0].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                            }
                        } else if (node.children[0].type === ASSIGN) {
                            tmpAssign = node.children[0];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[0] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        // increment idx by one since we added the temp assignment statement
                        addedStmtsCount++;
                    }

                    if (node.children[1].type !== STRING &&
                        node.children[1].type !== NUMBER &&
                        node.children[1].type !== IDENTIFIER &&
                        node.children[1].type !== TRUE &&
                        node.children[1].type !== FALSE &&
                        node.children[1].type !== NULL &&
                        node.children[1].type !== THIS) {
                        if (node.children[1].type === GROUP) {
                            if (node.children[1].children[0].type === ASSIGN) {
                                tmpAssign = node.children[1] = node.children[1].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[1]);
                            }
                        } else if (node.children[1].type === ASSIGN) {
                            tmpAssign = node.children[1];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[1]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[1] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        // increment idx by one sice we added the temp assignment statement
                        addedStmtsCount++;
                    }
                    nodeIdx.idx += addedStmtsCount;

                    var tmp = "_ifc_max_(" + exprSecLvl(node.children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp) + ","
                        + exprSecLvl(node.children[1], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp) + ")";
                    return tmp;
                }

                // e.g. a[i] or a[i][j]
                case INDEX:
                    var hoistCount = hoistAnyExprInIndex(node, nodeIdx, funcParams);
                    nodeIdx.idx += hoistCount;
                    if (!node.children[0].children || node.children[0].children.length == 0) {
                        var id = node.children[0].value;
                        var idx = node.children[1].value;
                        // Replace any occurrence of ' with "" nothing, removing them
                        //idx = idx.replace(/\'/g,"");
                        var secCls = "(" + id + " instanceof Array)?" +
                            id + "._sc :( " + id + "['" + idx + "'] instanceof Object)?" +
                            id + "['" + idx + "']._sc :" + id + "['" + idx + "_sc']";
                        return secCls;
                    } else {
                        var indexNode = node.children[0];
                        node.children[1].parentType = node.type;
                        var id, stk = [node.children[1]];
                        // Keep diving in until we get the id of the array or object
                        while (indexNode.children.length != 0) {
                            indexNode.children[1].parentType = indexNode.type;
                            stk.push(indexNode.children[1]);
                            indexNode = indexNode.children[0];
                        }
                        id = indexNode.value;
                        var objAttr = composeIndexExpr(id, stk);
                        var lastIdx = stk.shift();
                        var arrayIdx = composeIndexExpr(id, stk);
                        var secCls = "(" + arrayIdx + " instanceof Array)?" +
                            arrayIdx + "._sc :( " + objAttr + " instanceof Object)?" +
                            objAttr + "._sc :" + arrayIdx + "['" + lastIdx + "_sc']";
                        return secCls;
                    }

                // e.g. (x)
                case GROUP:
                    return exprSecLvl(node.children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword,assignOp);
                // e.g. x.y
                case DOT:
                    var addedStmtsCount = hoistCallsOrIndexInDotExpr(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    nodeIdx.idx += addedStmtsCount;

                    var objProp = "", secCls, nodeRef = node;

                    // For the case we have nested dot operator e.g. x.y.z
                    while (nodeRef.children[0].type === DOT) {
                        objProp = "." + nodeRef.children[1].value + objProp;
                        nodeRef = nodeRef.children[0];
                    }
                    objProp = nodeRef.children[0].value + "." + nodeRef.children[1].value + objProp;
                    secCls = "(" + objProp + " instanceof Object)? " +
                    objProp + "._sc" + " : " + objProp + "_sc";
                    return secCls;


                case DELETE:
                case TYPEOF:
                case NOT:
                case BITWISE_NOT:
                case UNARY_PLUS:
                case UNARY_MINUS:
                case INCREMENT:
                case DECREMENT:

                    if(node.children[0].type === DOT){
                        addedStmtsCount = hoistCallsOrIndexInDotExpr(node.children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        nodeIdx.idx += addedStmtsCount;
                    }

                    addedStmtsCount = 0;
                    if (node.children[0].type !== STRING &&
                        node.children[0].type !== NUMBER &&
                        node.children[0].type !== IDENTIFIER &&
                        node.children[0].type !== TRUE &&
                        node.children[0].type !== FALSE &&
                        node.children[0].type !== NULL &&
                        node.children[0].type !== THIS &&
                        node.children[0].type !== DOT) {
                        if (node.children[0].type === GROUP) {
                            if (node.children[0].children[0].type === ASSIGN) {
                                tmpAssign = node.children[0] = node.children[0].children[0];
                            } else {
                                tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                            }
                        } else if (node.children[0].type === ASSIGN) {
                            tmpAssign = node.children[0];
                        } else {
                            tmpAssign = assignNodeToTmpIdnt(node.children[0]);
                        }
                        var tmpIdnt = tmpAssign.children[0];
                        node.children[0] = tmpIdnt;
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        // increment idx by one since we added the temp assignment statement
                        addedStmtsCount++;
                    }
                    nodeIdx.idx += addedStmtsCount;
                    return exprSecLvl(node.children[0], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);

                case IDENTIFIER:
                    var idenName = node.value;
                    if (idenName === "undefined" || idenName === "NaN"
                        || idenName === "Infinity") {

                        return (node._sc || 0) + "";
                    }
                    // if the rhs is a param of a function
                    if (funcParams) {
                        var paramIdx = funcParams.indexOf(idenName);
                        if (paramIdx === -1) {
                            var secClass = "(" + idenName + " instanceof Object)? " +
                                idenName + "._sc" + " : " + idenName + "_sc";//,"<ifc rewrite>",1;
                            //secCls = secCls.children[0];
                            //secCls.ifcSynthetic = true;
                            return secClass;
                        } else {
                            var k, count;
                            for (k = this.ifcStk.length - 1, count = 0; k >= 0; k--, count++)
                                if (this.ifcStk[k].type === FUNCTION)
                                    break;

                            var pushedParamCount = " _ifc_stack_[_ifc_stack_.length-2 -" + count + "]";

                            var paramSecCls =
                                "_ifc_stack_[_ifc_stack_.length-2 -" + pushedParamCount + "-" + count + "+" + paramIdx + "]";

                            var secClass = "(" + paramIdx + "+1 <= " + pushedParamCount + ")? " + paramSecCls + ":0";

                            return secClass;
                        }
                    } else {
                        var secClass = "(" + idenName + " instanceof Object)? " +
                            idenName + "._sc" + " : " + idenName + "_sc";//,"<ifc rewrite>",1;
                        return secClass;
                    }


                case THIS:
                    var secClass = "this._sc"; // ,"<ifc rewrite>",1);
                    return secClass;

                // Literals e.g. true#1, false#2, [1#3, null#4], function#5 foo(){}.....
                // The parser have already parsed the security class and stored it in
                // "_sc" property of the AST node. Node that we handle the case where
                // the security class is not specified.
                case NULL:
                case TRUE:
                case FALSE:
                case NUMBER:
                case STRING:
                case REGEXP:
                    var secClassValue = (node._sc === undefined) ? 0 : node._sc;
                    var secClass = String(secClassValue);//,"<ifc rewrite>",1);
                    return secClass;

                case OBJECT_INIT:
                case ARRAY_INIT:
                case FUNCTION:
                {
                    var secClass = "0";
                    var newIfcStmts = [];
                    // if this node is an object initialization, rewrite property
                    // init for each property
                    if (node.type === OBJECT_INIT) {
                        newIfcStmts = rewritePropInit(lhsName, node, nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    } else if (node.type === ARRAY_INIT) {
                        newIfcStmts = rewriteArrayInit(lhsName, node, nodeIdx, [], funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    } else if (node.type === FUNCTION) {
                        if (node.name === undefined)
                            if (lhsName === undefined)
                                node.name = generateNextTempIdnt();
                            else
                                node.name = "";

                        rewriteFunction(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        return "";
                    }

                    // The security class of this object is the oplus (max) of its
                    // properties security classes.
                    if (node.type === OBJECT_INIT) {
                        secClass = "_ifc_max_(" + secClass;
                        for (var e in node.children) {
                            var id = lhsName, propName = node.children[e].children[0].value;
                            // We only care here about identifiers, objects and arrays since
                            // the parser took care of all the primitive literal types.
                            switch (node.children[e].children[1].type) {
                                case OBJECT_INIT:
                                case ARRAY_INIT:
                                    secClass += "," + id + "['" + propName + "']._sc";
                                    break;

                                // The identifier could be pointing to an object data type
                                // or primitive.
                                case IDENTIFIER:
                                    secClass += "," + "(" + id + "['" + propName + "'] instanceof Object)?" +
                                    id + "['" + propName + "']._sc :"
                                    + id + "['" + propName + "_sc']";
                                    break;
                            }
                        }
                        secClass += ")";
                    } else if (node.type === ARRAY_INIT) {
                        secClass = "_ifc_max_(" + secClass + "," + newIfcStmts.shift() + ")";
                    }

                    var newAssignStmt = lhsName + "._sc=_ifc_max_(" + pc + "," + secClass + ");";

                    var newStmtNode = Narcissus.parser.parse(newAssignStmt, "<ifc rewrite>", 1);
                    // The parse function returns SCRIPT as root node so we take the
                    // first child.
                    newStmtNode = newStmtNode.children[0];
                    // Label newly created node as ifcSynthetic to avoid rewriting it
                    newStmtNode.ifcSynthetic = true;
                    this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, newStmtNode);

                    for (var e in newIfcStmts) {
                        //console.log(newIfcStmts[e])
                        newStmtNode = Narcissus.parser.parse(newIfcStmts[e], "<ifc rewrite>", 1);
                        // The parse function returns SCRIPT as root node so we take the
                        // first child.
                        newStmtNode = newStmtNode.children[0];
                        // Label newly created node as ifcSynthetic to avoid rewriting it
                        newStmtNode.ifcSynthetic = true;
                        this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, newStmtNode);
                    }

                    // increment one time for the newStmtNode addition at line number 855
                    nodeIdx.idx++;
                    // add the number of added newIfcStmts to the nodeIdx
                    nodeIdx.idx += newIfcStmts.length;

                    return "";
                }

                default:
                    throw new Error("Can't determine security class of type: " + definitions.tokens[node.type]);
            }
        }

        function getPopStmt() {
            var popStmtStr = "_ifc_stack_.pop()";
            var node = Narcissus.parser.parse(popStmtStr, "<ifc rewrite>", 1);
            node = node.children[0];
            node.ifcSynthetic = true;
            return node;
        }

        function addPopStmtAtIdx(nodeIdx) {
            this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, getPopStmt());
        }

        function insertAndRewriteNodeAtIdx(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            this.currentBlockNode.children.splice(nodeIdx.idx, 0, node);
            rewriteStatement(this.currentBlockNode.children[nodeIdx.idx], nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            this.currentBlockNode.children[nodeIdx.idx].ifcSynthetic = true;
        }

        function insertNodeSecClsAtIdx(node, nodeIdx, funcParams) {
            var tmp = "_ifc_max_(_$pc(0)," + exprSecLvl(node, nodeIdx, funcParams) + ")";
            var idenSecCls = "(" + node.value + " instanceof Object)? " +
                node.value + "._sc =" + tmp + " : " +
                node.value + "_sc =" + tmp;
            var idenSecClsNode = Narcissus.parser.parse(idenSecCls, "<ifc rewrite>", 1);
            idenSecClsNode = idenSecClsNode.children[0];
            idenSecClsNode.ifcSynthetic = true;
            this.currentBlockNode.children.splice(nodeIdx.idx, 0, idenSecClsNode);
        }

        function pushValueAtIdx(value, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var secCls = "_ifc_stack_.push(" + value + ")";
            var secClsNode = Narcissus.parser.parse(secCls, "pushValueAtIdx", 1);
            secClsNode = secClsNode.children[0];
            secClsNode.ifcSynthetic = true;
            this.currentBlockNode.children.splice(nodeIdx.idx, 0, secClsNode);
        }

        function pushNodeSecClsAtIdx(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            var nodeSecCls = exprSecLvl(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
            var secCls = "_ifc_stack_.push(_ifc_max_(_$pc(0)," + nodeSecCls + "))";
            var secClsNode = Narcissus.parser.parse(secCls, "pushNodeSecClsAtIdx", 1);
            secClsNode = secClsNode.children[0];
            secClsNode.ifcSynthetic = true;
            this.currentBlockNode.children.splice(nodeIdx.idx, 0, secClsNode);
        }


        function insertUnwindStkAtIdxWithOldPCExpr(countExpr, nodeIdx, oldPCExpr) {
            var tmpnode = Narcissus.parser.parse(countExpr, "insertUnwindStkAtIdxWithOldPCExpr", 1);
            tmpnode = tmpnode.children[0];
            tmpnode.ifcSynthetic = true;

            var tmpAssign = assignNodeToTmpIdnt(tmpnode);
            tmpAssign.ifcSynthetic = true;
            var ident = tmpAssign.children[0];

            var forloop = "for(var _ifc_i_=0;_ifc_i_<" + ident.value +
                ";_ifc_i_++)_ifc_stack_.pop()";
            var stmts = ["_ifc_stack_[_ifc_stack_.length - 1]=_ifc_max_(_$pc(0),old_pc)", forloop,
                "var old_pc=" + oldPCExpr];
            for (var e in stmts) {
                var stmtNode = Narcissus.parser.parse(stmts[e], "<ifc rewrite>", 1);
                stmtNode = stmtNode.children[0];
                stmtNode.ifcSynthetic = true;

                this.currentBlockNode.children.splice(nodeIdx.idx, 0, stmtNode);
            }

            this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
        }

        function insertUnwindStkAtIdxWithSecCls(count, nodeIdx, secCls) {
            var forloop = "for(var _ifc_i_=0;_ifc_i_<" + count +
                ";_ifc_i_++)_ifc_stack_.pop()";
            var stmts = ["_ifc_stack_[_ifc_stack_.length-1]=_ifc_max_(_$pc(0),old_pc)", forloop,
                "var old_pc=_ifc_max_(_$pc(0)," + secCls + ")"];
            for (var e in stmts) {
                var stmtNode = Narcissus.parser.parse(stmts[e], "<ifc rewrite>", 1);
                stmtNode = stmtNode.children[0];
                stmtNode.ifcSynthetic = true;

                this.currentBlockNode.children.splice(nodeIdx.idx, 0, stmtNode);
            }
        }

        function insertUnwindStkAtIdx(count, nodeIdx) {
            var forloop = "for(var _ifc_i_=0;_ifc_i_<" + count +
                ";_ifc_i_++)_ifc_stack_.pop()";
            var stmts = ["_ifc_stack_[_ifc_stack_.length-1]=_ifc_max_(_$pc(-1),old_pc)", forloop,
                "var old_pc=_$pc(0)"];
            for (var e in stmts) {
                var stmtNode = Narcissus.parser.parse(stmts[e], "insertUnwindStkAtIdx:'" + stmts[e] + "'", 1);
                stmtNode = stmtNode.children[0];
                stmtNode.ifcSynthetic = true;

                this.currentBlockNode.children.splice(nodeIdx.idx, 0, stmtNode);
            }
        }

        function assignNodeToTmpIdnt(node) {
            var tmpIdnt = generateNextTempIdnt();
            var str = tmpIdnt + "=$";
            var tmpnode = Narcissus.parser.parse(str, "<ifc rewrite>", 1);
            tmpnode = tmpnode.children[0];
            tmpnode.children[1] = node;

            return tmpnode;
        }

        function rewriteStatement(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) {
            switch (node.type) {
                case FUNCTION:
                    rewriteFunction(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    node.ifcSynthetic = true;
                    break;

                case VAR:
                case CONST:
                case LET:
                    rewriteDeclaration(node, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    node.ifcSynthetic = true;
                    break;

                case LET_BLOCK:
                    node.variables.children.forEach(function (init) {
                        if (init.initializer)
                            init.initializer = rewriteExpression(init.initializer);
                    });
                    if (node.block)
                        rewriteStatement(node.block, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    else
                        node.expression = rewriteExpression(node.expression);
                    break;

                case BREAK:
                case CONTINUE:
                    var found, k, count;
                    if (node.label) {
                        found = false;
                        for (k = this.ifcStk.length - 1, count = 1; k >= 0; k--, count++)
                            if (this.ifcStk[k].labels.has(node.label)) {
                                found = true;
                                break;
                            }
                        // if we can't find the label it means we have special case
                        // e.g. l1: break l1; which we should ignore.
                        if (!found)
                            break;
                        else
                            insertUnwindStkAtIdx(count, nodeIdx);
                    } else {
                        found = false;
                        loop:for (k = this.ifcStk.length - 1, count = 1; k >= 0; k--, count++)
                            switch (this.ifcStk[k].type) {
                                case FOR:
                                case FOR_IN:
                                case WHILE:
                                case DO:
                                    found = true;
                                    break loop;

                                default:
                                    break;
                            }
                        // if we can't find the label it means we have special case
                        // e.g. l1: break l1; which we should ignore.
                        if (!found)
                            break;
                        else
                            insertUnwindStkAtIdx(1, nodeIdx);
                    }
                    // Label node as rewritten.
                    node.ifcSynthetic = true;
                    break;

                case THROW:
                    var k, count, addedStmtsCount = 0;
                    for (k = this.ifcStk.length - 1, count = 0; k >= 0; k--, count++)
                        if (this.ifcStk[k].type === FUNCTION)
                            break;

                    if (node.exception.type !== STRING &&
                        node.exception.type !== NUMBER &&
                        node.exception.type !== IDENTIFIER &&
                        node.exception.type !== TRUE &&
                        node.exception.type !== FALSE &&
                        node.exception.type !== NULL &&
                        node.exception.type !== THIS) {
                        var tmpAssign = assignNodeToTmpIdnt(node.exception);
                        //var tmpIdnt = tmpAssign.children[0].children[0];
                        var tmpIdnt = tmpAssign.children[0];
                        node.exception = tmpIdnt;
                        // Unwind the stack to the number of parameters passed to
                        // this function (_$pc(-1))
                        // The count of the parameters is in _$pc(-1) plus one since we
                        // want to pop the number itself. (a,b,c,3,func_sc)
                        var excepSecCls = exprSecLvl(node.exception, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        insertUnwindStkAtIdxWithSecCls(count, nodeIdx, excepSecCls);
                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        node.value = tmpIdnt;
                        addedStmtsCount++;
                    } else {
                        var excepSecCls = exprSecLvl(node.exception, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        insertUnwindStkAtIdxWithSecCls(count, nodeIdx, excepSecCls);
                    }
                    nodeIdx.idx += addedStmtsCount;
                    node.ifcSynthetic = true;
                    break;

                case RETURN:
                    var oldPCExpr;
                    if (node.value) {
                        var addedStmtsCount = 0;
                        if (node.value.type !== STRING &&
                            node.value.type !== NUMBER &&
                            node.value.type !== IDENTIFIER &&
                            node.value.type !== TRUE &&
                            node.value.type !== FALSE &&
                            node.value.type !== NULL &&
                            node.value.type !== THIS) {
                            var tmpAssign = assignNodeToTmpIdnt(node.value);
                            //var tmpIdnt = tmpAssign.children[0].children[0];
                            var tmpIdnt = tmpAssign.children[0];
                            oldPCExpr = "_ifc_max_(_$pc(0)," + exprSecLvl(tmpIdnt, nodeIdx, funcParams) + ")";
                            // Unwind the stack to the number of parameters passed to
                            // this function (_$pc(-1))
                            // The count of the parameters is in _$pc(-1) plus one since we
                            // want to pop the number itself. (a,b,c,3,func_sc)
                            insertUnwindStkAtIdxWithOldPCExpr("_$pc(-1)+1", nodeIdx, oldPCExpr);
                            this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                            tmpAssign.ifcSynthetic = true;
                            addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                            node.value = tmpIdnt;
                            addedStmtsCount++;
                        } else {
                            oldPCExpr = "_ifc_max_(_$pc(0)," + exprSecLvl(node.value, nodeIdx, funcParams) + ")";
                            // Unwind the stack to the number of parameters passed to
                            // this function (_$pc(-1))
                            // The count of the parameters is in _$pc(-1) plus one since we
                            // want to pop the number itself. (a,b,c,3,func_sc)
                            insertUnwindStkAtIdxWithOldPCExpr("_$pc(-1)+1", nodeIdx, oldPCExpr);
                        }
                        nodeIdx.idx += addedStmtsCount;

                    } else {
                        oldPCExpr = "_$pc(0)";
                        // Unwind the stack to the number of parameters passed to
                        // this function (_$pc(-1))
                        // The count of the parameters is in _$pc(-1) plus one since we
                        // want to pop the number itself. (a,b,c,3,func_sc)
                        insertUnwindStkAtIdxWithOldPCExpr("_$pc(-1)+1", nodeIdx, oldPCExpr);
                    }
                    node.ifcSynthetic = true;
                    break;

                case IF:
                    addPopStmtAtIdx(nodeIdx);
                    var addedStmtsCount = 0;
                    if (node.condition.type !== STRING &&
                        node.condition.type !== NUMBER &&
                        node.condition.type !== IDENTIFIER &&
                        node.condition.type !== TRUE &&
                        node.condition.type !== FALSE &&
                        node.condition.type !== NULL &&
                        node.condition.type !== THIS) {
                        var tmpAssign = assignNodeToTmpIdnt(node.condition);
                        var tmpIdnt = tmpAssign.children[0];
                        node.condition = tmpIdnt;
                        pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);

                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        addedStmtsCount++;
                    } else {
                        pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    }
                    nodeIdx.idx += addedStmtsCount;

                    this.ifcStk.push({type: node.type, labels: node.labels});

                    var tmpStr = "if($){}else{}";
                    var stmtNode = Narcissus.parser.parse(tmpStr, "<ifc rewrite>", 1);
                    stmtNode = stmtNode.children[0];
                    stmtNode.ifcSynthetic = true;

                    if (node.thenPart.type !== BLOCK) {
                        stmtNode.thenPart.children.push(node.thenPart);
                        node.thenPart = stmtNode.thenPart;
                    }
                    rewriteStatement(node.thenPart, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    if (node.elsePart) {
                        if (node.elsePart.type !== BLOCK) {
                            stmtNode.elsePart.children.push(node.elsePart);
                            node.elsePart = stmtNode.elsePart
                        }
                        rewriteStatement(node.elsePart, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword); // we consider it ifcSynthetic to avoid infinite rewriting.
                    }
                    node.ifcSynthetic = true;
                    this.ifcStk.pop();
                    return;

                case BLOCK:
                    rewriteStatements(node, funcParams);
                    node.ifcSynthetic = true;
                    break;

                case WHILE:
                    addPopStmtAtIdx(nodeIdx);
                    var tmpIdnt = undefined, tmpAssign = undefined,
                        secTmpAssign = undefined, addedStmtsCount = 0;
                    if (node.condition.type !== STRING &&
                        node.condition.type !== NUMBER &&
                        node.condition.type !== IDENTIFIER &&
                        node.condition.type !== TRUE &&
                        node.condition.type !== FALSE &&
                        node.condition.type !== NULL &&
                        node.condition.type !== THIS) {
                        tmpAssign = assignNodeToTmpIdnt(node.condition);
                        secTmpAssign = assignNodeToTmpIdnt(JSON.parse(JSON.stringify(node.condition)));

                        tmpIdnt = tmpAssign.children[0];
                        node.condition = tmpIdnt;
                        secTmpAssign.children[0] = tmpIdnt;
                        pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);

                        this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        tmpAssign.ifcSynthetic = true;
                        addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        addedStmtsCount++;
                    } else {
                        pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    }
                    nodeIdx.idx += addedStmtsCount;

                    this.ifcStk.push({type: node.type, labels: node.labels});
                    // we consider it ifcSynthetic to avoid infinite rewriting.
                    node.ifcSynthetic = true;
                    var tmpStr = "while(1){}";
                    var stmtNode = Narcissus.parser.parse(tmpStr, "<ifc rewrite>", 1);
                    stmtNode = stmtNode.children[0];
                    stmtNode.ifcSynthetic = true;
                    if (node.body.type !== BLOCK) {
                        stmtNode.body.push(node.body);
                        node.body = stmtNode.body;
                    }
                    // if we hoisted the while loop condition add it as the last statement
                    // to the loop body.
                    if (secTmpAssign !== undefined) {
                        secTmpAssign.ifcSynthetic = false;
                        node.body.push(secTmpAssign);
                    }

                    rewriteStatements(node.body, funcParams);
                    this.ifcStk.pop();
                    return;

                case DO:
                    addPopStmtAtIdx(nodeIdx);
                    var tmpIdnt = undefined, tmpAssign = undefined, secTmpAssign = undefined;
                    if (node.condition.type !== STRING &&
                        node.condition.type !== NUMBER &&
                        node.condition.type !== IDENTIFIER &&
                        node.condition.type !== TRUE &&
                        node.condition.type !== FALSE &&
                        node.condition.type !== NULL &&
                        node.condition.type !== THIS) {
                        tmpAssign = assignNodeToTmpIdnt(node.condition);
                        tmpIdnt = tmpAssign.children[0];
                        node.condition = tmpIdnt;
                        //secTmpAssign.children[0] = tmpIdnt;
                        //this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                        //tmpAssign.ifcSynthetic = true;
                        //rewriteStatement(tmpAssign, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    }

                    pushValueAtIdx("_$pc(0)", nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    this.ifcStk.push({type: node.type, labels: node.labels});
                    // we consider it ifcSynthetic to avoid infinite rewriting.
                    node.ifcSynthetic = true;
                    var tmpStr = "do{}while(1)";
                    var stmtNode = Narcissus.parser.parse(tmpStr, "<ifc rewrite>", 1);
                    stmtNode = stmtNode.children[0];
                    //stmtNode.ifcSynthetic = true;
                    if (node.body.type !== BLOCK) {
                        stmtNode.body.push(node.body);
                        node.body = stmtNode.body;
                    }
                    // if we hoisted the while loop condition add it as the last statement
                    // to the loop body.
                    if (tmpAssign !== undefined) {
                        tmpAssign.ifcSynthetic = false;
                        node.body.push(tmpAssign);
                    }

                    var secCls = "_ifc_stack_[_ifc_stack_.length-1] = _ifc_max_(_$pc(0)," +
                        exprSecLvl(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword) + ")";
                    var secClsNode = Narcissus.parser.parse(secCls, "rewriteStatement:DO", 1);
                    secClsNode = secClsNode.children[0];
                    secClsNode.ifcSynthetic = true;
                    node.body.push(secClsNode);

                    rewriteStatements(node.body, funcParams);
                    this.ifcStk.pop();
                    return;

                case SWITCH:
                    /*
                     node.discriminant = rewriteExpression(node.discriminant);
                     var cases = node.cases;
                     cases.forEach(function (caseNode) {
                     if (caseNode.caseLabel)
                     caseNode.caseLabel = rewriteExpression(caseNode.caseLabel);
                     rewriteStatements(caseNode.statements, funcParams);
                     });
                     */
                    node.ifcSynthetic = true;
                    break;

                case FOR:
                    // Adding the pop() statement before the nodeIdx get changed
                    // by adding the extra statements down below.
                    addPopStmtAtIdx(nodeIdx);

                    var tmpStr = "for(;;){}";
                    var stmtNode = Narcissus.parser.parse(tmpStr, "<ifc rewrite>", 1);
                    stmtNode = stmtNode.children[0];
                    stmtNode.ifcSynthetic = true;
                    if (node.body.type !== BLOCK) {
                        stmtNode.body.push(node.body);
                        node.body = stmtNode.body;
                    }
                    secTmpAssign = undefined;
                    var addedStmtsCount = 0;
                    if (node.condition) {
                        if (node.condition.type !== STRING &&
                            node.condition.type !== NUMBER &&
                            node.condition.type !== IDENTIFIER &&
                            node.condition.type !== TRUE &&
                            node.condition.type !== FALSE &&
                            node.condition.type !== NULL &&
                            node.condition.type !== THIS) {
                            tmpAssign = assignNodeToTmpIdnt(node.condition);
                            secTmpAssign = assignNodeToTmpIdnt(JSON.parse(JSON.stringify(node.condition)));

                            tmpIdnt = tmpAssign.children[0];
                            node.condition = tmpIdnt;
                            secTmpAssign.children[0] = tmpIdnt;
                            pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);

                            this.currentBlockNode.children.splice(nodeIdx.idx, 0, tmpAssign);
                            tmpAssign.ifcSynthetic = true;
                            addedStmtsCount += rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                            addedStmtsCount++;

                        } else {
                            pushNodeSecClsAtIdx(node.condition, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        }
                        //nodeIdx.idx += addedStmtsCount;
                    }

                    if (node.setup) {
                        if (node.setup.type === COMMA) {
                            var ident;
                            for (var e in node.setup.children) {
                                if (node.setup.children[e].type === ASSIGN) {
                                    ident = node.setup.children[e].children[0];
                                } else if (node.setup.children[e].type === IDENTIFIER) {
                                    ident = node.setup.children[e];
                                } else {
                                    throw "Rewriting for-loop setup node of type: " + definitions.tokens[node.setup.children[e].type] +
                                    " is not supported!!";
                                }
                                insertNodeSecClsAtIdx(ident, nodeIdx, funcParams);
                                insertAndRewriteNodeAtIdx(node.setup.children[e], nodeIdx, funcParams);
                            }
                        }
                        else {
                            if (node.setup.type === VAR) {
                                for (var e in node.setup.children) {
                                    if (node.setup.children[e].type === ASSIGN) {
                                        ident = node.setup.children[e].children[0];
                                    } else {
                                        ident = node.setup.children[e];
                                    }
                                    insertNodeSecClsAtIdx(ident, nodeIdx, funcParams);
                                }
                            }
                            insertAndRewriteNodeAtIdx(node.setup, nodeIdx, funcParams);
                        }
                        // Removing the node.setup node from the AST since it is already moved
                        // up before the for-loop.
                        node.setup = null;
                    }
                    if (node.update) {
                        if (node.update.type === COMMA)
                            for (var e in node.update.children)
                                node.body.push(node.update.children[e]);
                        else {
                            node.body.push(node.update);
                        }
                        node.update = null;
                    }


                    this.ifcStk.push({type: node.type, labels: node.labels});
                    // After all the rewriting done to the for-loop statement so far
                    // we consider it ifcSynthetic to avoid infinite rewriting.
                    node.ifcSynthetic = true;
                    // if we hoisted the while loop condition add it as the last statement
                    // to the loop body.
                    if (secTmpAssign !== undefined) {
                        secTmpAssign.ifcSynthetic = false;
                        node.body.push(secTmpAssign);
                    }
                    rewriteStatements(node.body, funcParams);
                    this.ifcStk.pop();
                    break;

                case FOR_IN:
                    // Adding the pop() statement before the nodeIdx get changed
                    // by adding the extra statements down below.
                    this.currentBlockNode.children.splice(nodeIdx.idx + 1, 0, getPopStmt());

                    var tmpStr = "for(;;){}";
                    var stmtNode = Narcissus.parser.parse(tmpStr, "<ifc rewrite>", 1);
                    stmtNode = stmtNode.children[0];
                    stmtNode.ifcSynthetic = true;
                    if (node.body.type !== BLOCK) {
                        stmtNode.body.push(node.body);
                        node.body = stmtNode.body;
                    }

                    var ident;
                    if (node._iterator.type === VAR) {
                        if (node._iterator.children[0].type === ASSIGN) {
                            ident = node._iterator.children[0].children[0];
                        } else {
                            ident = node._iterator.children[0];
                        }
                    } else if (node._iterator.type === IDENTIFIER) {
                        ident = node._iterator;
                    } else // If it is not VAR or IDENTIFIER it will fail at run time anyway.
                        break;

                    insertNodeSecClsAtIdx(ident, nodeIdx, funcParams);

                    if (node._iterator.type === VAR) {
                        var tmpNode = Narcissus.parser.parse(ident.value + "", "<ifc rewrite>", 1);
                        tmpNode = tmpNode.children[0];

                        // Moving node._iterator up before the loop and rewriting
                        // Over-ridding value of _iterator and iterator with the iterator identifier.
                        node._iterator = tmpNode;
                        node.iterator = tmpNode;
                        // nulling the varDecl and varDecls since we have move it up before the loop
                        node.varDecls = null;
                        node.varDecl = null;
                    }

                    pushNodeSecClsAtIdx(node.object, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    this.ifcStk.push({type: node.type, labels: node.labels});
                    // After all the rewriting done to the for-loop statement so far
                    // we consider it ifcSynthetic to avoid infinite rewriting.
                    node.ifcSynthetic = true;
                    rewriteStatements(node.body, funcParams);
                    this.ifcStk.pop();
                    break;

                case TRY:
                    rewriteStatement(node.tryBlock, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    rewriteCatchClauses(node, funcParams);
                    if (node.finallyBlock)
                        rewriteStatement(node.finallyBlock, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    node.ifcSynthetic = true;
                    break;

                case SEMICOLON:
                    if (node.expression) {
                        rewriteStatement(node.expression, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                        node.ifcSynthetic = true;
                    }
                    break;

                case LABEL:
                    rewriteStatement(node.statement, nodeIdx, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    node.ifcSynthetic = true;
                    break;

                case ASSIGN:
                    rewriteAssignment(node, nodeIdx, false, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);
                    node.ifcSynthetic = true;
                    break;

                case WITH:
                    throw new Error("not yet implemented: " + definitions.tokens[node.type]);
                    break;

                case MODULE:
                case IMPORT:
                case EXPORT:
                    throw new Error("not yet implemented: " + definitions.tokens[node.type]);
                    break;

                default:
                    //if (node.type === CALL || node.type === NEW_WITH_ARGS ||
                    //    node.type === HOOK || node.type === GROUP ||
                    //    node.type === COMMA || node.type === DOT ||
                    //    node.type === INDEX || node.type === OBJECT_INIT ||
                    //    node.type === ARRAY_INIT) {

                        var tmpAssign = assignNodeToTmpIdnt(node);
                        tmpAssign.ifcSynthetic = true;
                        // In case of function and new calls we don't need to move
                        // the index of the current statement since it is already
                        // wrapped inside an if-stmt.
                        //if(node.type !== CALL && node.type !== NEW_WITH_ARGS)
                        this.currentBlockNode.children[nodeIdx.idx] = tmpAssign;
                        // The rewriteAssignment in the case of calls it replaces the call stmt
                        // with an if-stmt effectively adding zero statements. So here we add
                        // the result of the added statements which could be one or zero.
                        var hoistCount = rewriteAssignment(tmpAssign, nodeIdx, true, funcParams, lhs, lhsName, lhsObj, lhsIdxNode, pc, varKeyword);

                        nodeIdx.idx += hoistCount;
                    //} else {
                    //    node.ifcSynthetic = true;
                    //}

                    break;

            }
        }

        function rewriteStatementsHelper(node, funcParams) {
            for (var i = 0; i < node.children.length; i++)
                if (!node.children[i].ifcSynthetic)
                    rewriteStatement(node.children[i], {idx: i}, funcParams);

        }

        function rewriteStatements(node, funcParams) {
            // Storing the prevBlockNode pointer in the node to retrieve it after
            // rewriting all the statements of this node.
            node.prevBlockNode = this.prevBlockNode || null;
            // Store current in the prev pointer
            this.prevBlockNode = this.currentBlockNode || null;
            // Update current pointer to current node
            this.currentBlockNode = node;

            rewriteStatementsHelper(node, funcParams);

            // Restore back the current pointer
            this.currentBlockNode = this.prevBlockNode;
            // Restore back prev pointer from the node
            this.prevBlockNode = node.prevBlockNode;
        }

        function addPreamble(node) {
            var pcFuncStr = 'function _$pc(idx) { ' +
                'var eIdx = _ifc_stack_.length - 1 + idx ;' +
                'return _ifc_stack_[eIdx] }';

            var pcFunc = Narcissus.parser.parse(pcFuncStr, "<ifc rewrite>", 1);
            // parser.parse() always return the root node as a SCRIPT node so we take
            // the first child
            pcFunc = pcFunc.children[0];
            // Label newly created node as ifcSynthetic to avoid rewriting it
            pcFunc.ifcSynthetic = true;
            node.children.splice(0, 0, pcFunc);

            var ifcSecCnxtStack = Narcissus.parser.parse("var _ifc_stack_ = [0];", "<ifc rewrite>", 1);
            // parser.parse() always return the root node as a SCRIPT node so we take
            // the first child
            ifcSecCnxtStack = ifcSecCnxtStack.children[0];
            // Label newly created node as ifcSynthetic to avoid rewriting it
            ifcSecCnxtStack.ifcSynthetic = true;
            node.children.splice(0, 0, ifcSecCnxtStack);

            // IFC utility function ⊕ oplus or circle plus
            var oplusFuncStr = 'function _ifc_max_() { ' +
                'var args = Array.prototype.slice.call(arguments, 0);' +
                'return args.sort(function(a, b){return b-a})[0];}';

            var ifcOplusFunc = Narcissus.parser.parse(oplusFuncStr, "<ifc rewrite>", 1);
            // parser.parse() always return the root node as a SCRIPT node so we take
            // the first child
            ifcOplusFunc = ifcOplusFunc.children[0];
            // Label newly created node as ifcSynthetic to avoid rewriting it
            ifcOplusFunc.ifcSynthetic = true;
            node.children.splice(0, 0, ifcOplusFunc);

            return node;
        }

        function rewriteScript(node) {
            this.ifcStk = [];
            rewriteStatements(addPreamble(node));
        }

        function rewrite(node) {
            rewriteScript(node);
            return node;
        }

        return {
            ifcRewrite: rewrite
        };

    })();

});
