function _ifc_max_() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.sort(function(a, b) {
        return (b - a);
    })[0];
};
var _ifc_stack_ = [0,];
function _$pc(idx) {
    var eIdx = ((_ifc_stack_.length - 1) + idx);
    return _ifc_stack_[eIdx];
};
var Aes = {
};
Aes._sc = _ifc_max_(0, _ifc_max_(0));
Aes.cipher = function(input, w) {
    var Nb = 4;
    if (((Nb instanceof Object) && (Nb !== null))) {
        Nb._sc = _ifc_max_(0, 0);
    } else {
        if ((Nb !== null)) {
            var Nb_sc = _ifc_max_(0, 0);
        }
    };
    _$t1 = w.length;
    if (((_$t1 instanceof Object) && (_$t1 !== null))) {
        _$t1._sc = _ifc_max_(0, ((((w.length instanceof Object))) ? w.length._sc : w.length_sc));
    } else {
        if ((_$t1 !== null)) {
            var _$t1_sc = _ifc_max_(0, ((((w.length instanceof Object))) ? w.length._sc : w.length_sc));
        }
    };
    _$t0 = (_$t1 / Nb);
    if (((_$t0 instanceof Object) && (_$t0 !== null))) {
        _$t0._sc = _ifc_max_(0, _ifc_max_(((((_$t1 instanceof Object))) ? _$t1._sc : _$t1_sc), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
    } else {
        if ((_$t0 !== null)) {
            var _$t0_sc = _ifc_max_(0, _ifc_max_(((((_$t1 instanceof Object))) ? _$t1._sc : _$t1_sc), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        }
    };
    var Nr = (_$t0 - 1);
    if (((Nr instanceof Object) && (Nr !== null))) {
        Nr._sc = _ifc_max_(0, _ifc_max_(((((_$t0 instanceof Object))) ? _$t0._sc : _$t0_sc), 0));
    } else {
        if ((Nr !== null)) {
            var Nr_sc = _ifc_max_(0, _ifc_max_(((((_$t0 instanceof Object))) ? _$t0._sc : _$t0_sc), 0));
        }
    };
    _$t2 = [];
    _$t3 = [];
    _$t4 = [];
    _$t5 = [];
    _$t5._sc = _ifc_max_(0, _ifc_max_(0, undefined));
    _$t4._sc = _ifc_max_(0, _ifc_max_(0, undefined));
    _$t3._sc = _ifc_max_(0, _ifc_max_(0, undefined));
    _$t2._sc = _ifc_max_(0, _ifc_max_(0, undefined));
    var state = [_$t2,_$t3,_$t4,_$t5,];
    state._sc = _ifc_max_(0, _ifc_max_(0, 0, ((((_$t2 instanceof Object))) ? _$t2._sc : _$t2_sc), ((((_$t3 instanceof Object))) ? _$t3._sc : _$t3_sc), ((((_$t4 instanceof Object))) ? _$t4._sc : _$t4_sc), ((((_$t5 instanceof Object))) ? _$t5._sc : _$t5_sc)));
    _$t8 = (4 * Nb);
    if (((_$t8 instanceof Object) && (_$t8 !== null))) {
        _$t8._sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
    } else {
        if ((_$t8 !== null)) {
            var _$t8_sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        }
    };
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t6 = (i < _$t8);
    if (((_$t6 instanceof Object) && (_$t6 !== null))) {
        _$t6._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t8 instanceof Object))) ? _$t8._sc : _$t8_sc)));
    } else {
        if ((_$t6 !== null)) {
            var _$t6_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t8 instanceof Object))) ? _$t8._sc : _$t8_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t6 instanceof Object))) ? _$t6._sc : _$t6_sc)));
    for (; _$t6; ) {
        _$t10 = (i / 4);
        if (((_$t10 instanceof Object) && (_$t10 !== null))) {
            _$t10._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t10 !== null)) {
                var _$t10_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t12 = (i % 4);
        if (((_$t12 instanceof Object) && (_$t12 !== null))) {
            _$t12._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t12 !== null)) {
                var _$t12_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        if (((((Math["floor"] && (Math["floor"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "floor") || ("apply" === "floor"))))))))) {
            _$t11 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
            _ifc_stack_.push(((((_$t10 instanceof Object))) ? _$t10._sc : _$t10_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t11);
            var _$t9 = Math["floor"](_$t10);
            if ((_$t9 instanceof Object)) {
                _$t9._sc = _ifc_stack_.pop();
            } else {
                var _$t9_sc = _ifc_stack_.pop();
            };
        }
         else if (Math["floor"]) {
            var _$t9 = Math["floor"](_$t10);
            if (((_$t9 instanceof Object) && (_$t9 !== null))) {
                _$t9._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t10 instanceof Object))) ? _$t10._sc : _$t10_sc)));
            } else {
                if ((_$t9 !== null)) {
                    var _$t9_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t10 instanceof Object))) ? _$t10._sc : _$t10_sc)));
                }
            };
        }
        
    ;
        state[_$t12][_$t9] = input[i];
        if ((state[_$t12] instanceof Array)) {
            state[_$t12]._sc = _ifc_max_(_$pc(0), ((((_$t9 instanceof Object))) ? _$t9._sc : _$t9_sc), ((((_$t12 instanceof Object))) ? _$t12._sc : _$t12_sc), ((((input instanceof Array))) ? input._sc : ((((input["i"] instanceof Object))) ? input["i"]._sc : input["i_sc"])), state[_$t12]._sc);
        } else {
            if ((state[_$t12][_$t9] instanceof Object)) state[_$t12][_$t9]._sc = _ifc_max_(_$pc(0), ((((_$t9 instanceof Object))) ? _$t9._sc : _$t9_sc), ((((_$t12 instanceof Object))) ? _$t12._sc : _$t12_sc), ((((input instanceof Array))) ? input._sc : ((((input["i"] instanceof Object))) ? input["i"]._sc : input["i_sc"])));
             else {
                state[_$t12]["_$t9_sc"] = _ifc_max_(_$pc(0), ((((_$t9 instanceof Object))) ? _$t9._sc : _$t9_sc), ((((_$t12 instanceof Object))) ? _$t12._sc : _$t12_sc), ((((input instanceof Array))) ? input._sc : ((((input["i"] instanceof Object))) ? input["i"]._sc : input["i_sc"])));
                state[_$t12]._sc = ((((state[_$t12]["_$t9_sc"] >= state[_$t12]._sc))) ? state[_$t12]["_$t9_sc"] : state[_$t12]._sc);
            }
        
        };
        _$t13 = i++;
        if (((_$t13 instanceof Object) && (_$t13 !== null))) {
            _$t13._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t13 !== null)) {
                var _$t13_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t14 = (4 * Nb);
        if (((_$t14 instanceof Object) && (_$t14 !== null))) {
            _$t14._sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        } else {
            if ((_$t14 !== null)) {
                var _$t14_sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
            }
        };
        _$t6 = (i < _$t14);
        if (((_$t6 instanceof Object) && (_$t6 !== null))) {
            _$t6._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t14 instanceof Object))) ? _$t14._sc : _$t14_sc)));
        } else {
            if ((_$t6 !== null)) {
                _$t6_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t14 instanceof Object))) ? _$t14._sc : _$t14_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["addRoundKey"] && (Aes["addRoundKey"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "addRoundKey") || ("apply" === "addRoundKey"))))))))) {
        _$t15 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
        _ifc_stack_.push((((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
        _ifc_stack_.push(4);
        _ifc_stack_.push(_$t15);
        state = Aes["addRoundKey"](state, w, 0, Nb);
        if ((state instanceof Object)) {
            state._sc = _ifc_stack_.pop();
        } else {
            state_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["addRoundKey"]) {
        state = Aes["addRoundKey"](state, w, 0, Nb);
        if (((state instanceof Object) && (state !== null))) {
            state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), 0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
        } else {
            if ((state !== null)) {
                state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), 0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
            }
        };
    }
    
;
    var round = 1;
    if (((round instanceof Object) && (round !== null))) {
        round._sc = _ifc_max_(0, 0);
    } else {
        if ((round !== null)) {
            var round_sc = _ifc_max_(0, 0);
        }
    };
    ((((round instanceof Object))) ? round._sc = _ifc_max_(_$pc(0), ((((round instanceof Object))) ? round._sc : round_sc)) : round_sc = _ifc_max_(_$pc(0), ((((round instanceof Object))) ? round._sc : round_sc)));
    _$t16 = (round < Nr);
    if (((_$t16 instanceof Object) && (_$t16 !== null))) {
        _$t16._sc = _ifc_max_(0, _ifc_max_(((((round instanceof Object))) ? round._sc : round_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc)));
    } else {
        if ((_$t16 !== null)) {
            var _$t16_sc = _ifc_max_(0, _ifc_max_(((((round instanceof Object))) ? round._sc : round_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t16 instanceof Object))) ? _$t16._sc : _$t16_sc)));
    for (; _$t16; ) {
        if (((((Aes["subBytes"] && (Aes["subBytes"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "subBytes") || ("apply" === "subBytes"))))))))) {
            _$t18 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
            _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t18);
            state = Aes["subBytes"](state, Nb);
            if ((state instanceof Object)) {
                state._sc = _ifc_stack_.pop();
            } else {
                state_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["subBytes"]) {
            state = Aes["subBytes"](state, Nb);
            if (((state instanceof Object) && (state !== null))) {
                state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
            } else {
                if ((state !== null)) {
                    state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
                }
            };
        }
        
    ;
        if (((((Aes["shiftRows"] && (Aes["shiftRows"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "shiftRows") || ("apply" === "shiftRows"))))))))) {
            _$t19 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
            _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t19);
            state = Aes["shiftRows"](state, Nb);
            if ((state instanceof Object)) {
                state._sc = _ifc_stack_.pop();
            } else {
                state_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["shiftRows"]) {
            state = Aes["shiftRows"](state, Nb);
            if (((state instanceof Object) && (state !== null))) {
                state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
            } else {
                if ((state !== null)) {
                    state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
                }
            };
        }
        
    ;
        if (((((Aes["mixColumns"] && (Aes["mixColumns"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "mixColumns") || ("apply" === "mixColumns"))))))))) {
            _$t20 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
            _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t20);
            state = Aes["mixColumns"](state, Nb);
            if ((state instanceof Object)) {
                state._sc = _ifc_stack_.pop();
            } else {
                state_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["mixColumns"]) {
            state = Aes["mixColumns"](state, Nb);
            if (((state instanceof Object) && (state !== null))) {
                state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
            } else {
                if ((state !== null)) {
                    state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
                }
            };
        }
        
    ;
        if (((((Aes["addRoundKey"] && (Aes["addRoundKey"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "addRoundKey") || ("apply" === "addRoundKey"))))))))) {
            _$t21 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
            _ifc_stack_.push((((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 1)] : 0));
            _ifc_stack_.push(((((round instanceof Object))) ? round._sc : round_sc));
            _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
            _ifc_stack_.push(4);
            _ifc_stack_.push(_$t21);
            state = Aes["addRoundKey"](state, w, round, Nb);
            if ((state instanceof Object)) {
                state._sc = _ifc_stack_.pop();
            } else {
                state_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["addRoundKey"]) {
            state = Aes["addRoundKey"](state, w, round, Nb);
            if (((state instanceof Object) && (state !== null))) {
                state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((round instanceof Object))) ? round._sc : round_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
            } else {
                if ((state !== null)) {
                    state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((round instanceof Object))) ? round._sc : round_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
                }
            };
        }
        
    ;
        _$t22 = round++;
        if (((_$t22 instanceof Object) && (_$t22 !== null))) {
            _$t22._sc = _ifc_max_(0, ((((round instanceof Object))) ? round._sc : round_sc));
        } else {
            if ((_$t22 !== null)) {
                var _$t22_sc = _ifc_max_(0, ((((round instanceof Object))) ? round._sc : round_sc));
            }
        };
        _$t16 = (round < Nr);
        if (((_$t16 instanceof Object) && (_$t16 !== null))) {
            _$t16._sc = _ifc_max_(_$pc(0), _ifc_max_(((((round instanceof Object))) ? round._sc : round_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc)));
        } else {
            if ((_$t16 !== null)) {
                _$t16_sc = _ifc_max_(_$pc(0), _ifc_max_(((((round instanceof Object))) ? round._sc : round_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["subBytes"] && (Aes["subBytes"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "subBytes") || ("apply" === "subBytes"))))))))) {
        _$t23 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
        _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t23);
        state = Aes["subBytes"](state, Nb);
        if ((state instanceof Object)) {
            state._sc = _ifc_stack_.pop();
        } else {
            state_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["subBytes"]) {
        state = Aes["subBytes"](state, Nb);
        if (((state instanceof Object) && (state !== null))) {
            state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
        } else {
            if ((state !== null)) {
                state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
            }
        };
    }
    
;
    if (((((Aes["shiftRows"] && (Aes["shiftRows"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "shiftRows") || ("apply" === "shiftRows"))))))))) {
        _$t24 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
        _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t24);
        state = Aes["shiftRows"](state, Nb);
        if ((state instanceof Object)) {
            state._sc = _ifc_stack_.pop();
        } else {
            state_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["shiftRows"]) {
        state = Aes["shiftRows"](state, Nb);
        if (((state instanceof Object) && (state !== null))) {
            state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
        } else {
            if ((state !== null)) {
                state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((state instanceof Object))) ? state._sc : state_sc)));
            }
        };
    }
    
;
    if (((((Aes["addRoundKey"] && (Aes["addRoundKey"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "addRoundKey") || ("apply" === "addRoundKey"))))))))) {
        _$t25 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((state instanceof Object))) ? state._sc : state_sc));
        _ifc_stack_.push((((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0));
        _ifc_stack_.push(((((Nr instanceof Object))) ? Nr._sc : Nr_sc));
        _ifc_stack_.push(((((Nb instanceof Object))) ? Nb._sc : Nb_sc));
        _ifc_stack_.push(4);
        _ifc_stack_.push(_$t25);
        state = Aes["addRoundKey"](state, w, Nr, Nb);
        if ((state instanceof Object)) {
            state._sc = _ifc_stack_.pop();
        } else {
            state_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["addRoundKey"]) {
        state = Aes["addRoundKey"](state, w, Nr, Nb);
        if (((state instanceof Object) && (state !== null))) {
            state._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
        } else {
            if ((state !== null)) {
                state_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((Nr instanceof Object))) ? Nr._sc : Nr_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0), ((((state instanceof Object))) ? state._sc : state_sc)));
            }
        };
    }
    
;
    _$t26 = (4 * Nb);
    if (((_$t26 instanceof Object) && (_$t26 !== null))) {
        _$t26._sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
    } else {
        if ((_$t26 !== null)) {
            var _$t26_sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        }
    };
    if ((((Array && (Array._sc !== undefined))))) {
        _$t27 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((_$t26 instanceof Object))) ? _$t26._sc : _$t26_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t27);
        var output = new Array(_$t26);
        if ((output instanceof Object)) {
            output._sc = _ifc_stack_.pop();
        } else {
            var output_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var output = new Array(_$t26);
        if (((output instanceof Object) && (output !== null))) {
            output._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t26 instanceof Object))) ? _$t26._sc : _$t26_sc)));
        } else {
            if ((output !== null)) {
                var output_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t26 instanceof Object))) ? _$t26._sc : _$t26_sc)));
            }
        };
    }
    
;
    _$t30 = (4 * Nb);
    if (((_$t30 instanceof Object) && (_$t30 !== null))) {
        _$t30._sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
    } else {
        if ((_$t30 !== null)) {
            var _$t30_sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        }
    };
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t28 = (i < _$t30);
    if (((_$t28 instanceof Object) && (_$t28 !== null))) {
        _$t28._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t30 instanceof Object))) ? _$t30._sc : _$t30_sc)));
    } else {
        if ((_$t28 !== null)) {
            var _$t28_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t30 instanceof Object))) ? _$t30._sc : _$t30_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t28 instanceof Object))) ? _$t28._sc : _$t28_sc)));
    for (; _$t28; ) {
        _$t32 = (i / 4);
        if (((_$t32 instanceof Object) && (_$t32 !== null))) {
            _$t32._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t32 !== null)) {
                var _$t32_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t34 = (i % 4);
        if (((_$t34 instanceof Object) && (_$t34 !== null))) {
            _$t34._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t34 !== null)) {
                var _$t34_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        if (((((Math["floor"] && (Math["floor"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "floor") || ("apply" === "floor"))))))))) {
            _$t33 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
            _ifc_stack_.push(((((_$t32 instanceof Object))) ? _$t32._sc : _$t32_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t33);
            var _$t31 = Math["floor"](_$t32);
            if ((_$t31 instanceof Object)) {
                _$t31._sc = _ifc_stack_.pop();
            } else {
                var _$t31_sc = _ifc_stack_.pop();
            };
        }
         else if (Math["floor"]) {
            var _$t31 = Math["floor"](_$t32);
            if (((_$t31 instanceof Object) && (_$t31 !== null))) {
                _$t31._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t32 instanceof Object))) ? _$t32._sc : _$t32_sc)));
            } else {
                if ((_$t31 !== null)) {
                    var _$t31_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t32 instanceof Object))) ? _$t32._sc : _$t32_sc)));
                }
            };
        }
        
    ;
        output[i] = state[_$t34][_$t31];
        if ((output instanceof Array)) {
            output._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((state[_$t34] instanceof Array))) ? state[_$t34]._sc : ((((state[_$t34][_$t31] instanceof Object))) ? state[_$t34][_$t31]._sc : state[_$t34]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t31\u000a}_sc"])), output._sc);
        } else {
            if ((output[i] instanceof Object)) output[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((state[_$t34] instanceof Array))) ? state[_$t34]._sc : ((((state[_$t34][_$t31] instanceof Object))) ? state[_$t34][_$t31]._sc : state[_$t34]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t31\u000a}_sc"])));
             else {
                output["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((state[_$t34] instanceof Array))) ? state[_$t34]._sc : ((((state[_$t34][_$t31] instanceof Object))) ? state[_$t34][_$t31]._sc : state[_$t34]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t31\u000a}_sc"])));
                output._sc = ((((output["i_sc"] >= output._sc))) ? output["i_sc"] : output._sc);
            }
        
        };
        _$t35 = i++;
        if (((_$t35 instanceof Object) && (_$t35 !== null))) {
            _$t35._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t35 !== null)) {
                var _$t35_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t36 = (4 * Nb);
        if (((_$t36 instanceof Object) && (_$t36 !== null))) {
            _$t36._sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
        } else {
            if ((_$t36 !== null)) {
                var _$t36_sc = _ifc_max_(0, _ifc_max_(0, ((((Nb instanceof Object))) ? Nb._sc : Nb_sc)));
            }
        };
        _$t28 = (i < _$t36);
        if (((_$t28 instanceof Object) && (_$t28 !== null))) {
            _$t28._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t36 instanceof Object))) ? _$t36._sc : _$t36_sc)));
        } else {
            if ((_$t28 !== null)) {
                _$t28_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t36 instanceof Object))) ? _$t36._sc : _$t36_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    _$t37 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), ((((output instanceof Object))) ? output._sc : output_sc));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t37); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return output;
};
Aes["cipher"]._sc = 0;
Aes.keyExpansion = function(key) {
    var Nb = 4;
    if (((Nb instanceof Object) && (Nb !== null))) {
        Nb._sc = _ifc_max_(0, 0);
    } else {
        if ((Nb !== null)) {
            var Nb_sc = _ifc_max_(0, 0);
        }
    };
    _$t38 = key.length;
    if (((_$t38 instanceof Object) && (_$t38 !== null))) {
        _$t38._sc = _ifc_max_(0, ((((key.length instanceof Object))) ? key.length._sc : key.length_sc));
    } else {
        if ((_$t38 !== null)) {
            var _$t38_sc = _ifc_max_(0, ((((key.length instanceof Object))) ? key.length._sc : key.length_sc));
        }
    };
    var Nk = (_$t38 / 4);
    if (((Nk instanceof Object) && (Nk !== null))) {
        Nk._sc = _ifc_max_(0, _ifc_max_(((((_$t38 instanceof Object))) ? _$t38._sc : _$t38_sc), 0));
    } else {
        if ((Nk !== null)) {
            var Nk_sc = _ifc_max_(0, _ifc_max_(((((_$t38 instanceof Object))) ? _$t38._sc : _$t38_sc), 0));
        }
    };
    var Nr = (Nk + 6);
    if (((Nr instanceof Object) && (Nr !== null))) {
        Nr._sc = _ifc_max_(0, _ifc_max_(((((Nk instanceof Object))) ? Nk._sc : Nk_sc), 0));
    } else {
        if ((Nr !== null)) {
            var Nr_sc = _ifc_max_(0, _ifc_max_(((((Nk instanceof Object))) ? Nk._sc : Nk_sc), 0));
        }
    };
    _$t40 = (((Nr + 1)));
    if (((_$t40 instanceof Object) && (_$t40 !== null))) {
        _$t40._sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
    } else {
        if ((_$t40 !== null)) {
            var _$t40_sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
        }
    };
    _$t39 = (Nb * _$t40);
    if (((_$t39 instanceof Object) && (_$t39 !== null))) {
        _$t39._sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t40 instanceof Object))) ? _$t40._sc : _$t40_sc)));
    } else {
        if ((_$t39 !== null)) {
            var _$t39_sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t40 instanceof Object))) ? _$t40._sc : _$t40_sc)));
        }
    };
    if ((((Array && (Array._sc !== undefined))))) {
        _$t41 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((_$t39 instanceof Object))) ? _$t39._sc : _$t39_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t41);
        var w = new Array(_$t39);
        if ((w instanceof Object)) {
            w._sc = _ifc_stack_.pop();
        } else {
            var w_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var w = new Array(_$t39);
        if (((w instanceof Object) && (w !== null))) {
            w._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t39 instanceof Object))) ? _$t39._sc : _$t39_sc)));
        } else {
            if ((w !== null)) {
                var w_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t39 instanceof Object))) ? _$t39._sc : _$t39_sc)));
            }
        };
    }
    
;
    if ((((Array && (Array._sc !== undefined))))) {
        _$t42 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t42);
        var temp = new Array(4);
        if ((temp instanceof Object)) {
            temp._sc = _ifc_stack_.pop();
        } else {
            var temp_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var temp = new Array(4);
        if (((temp instanceof Object) && (temp !== null))) {
            temp._sc = _ifc_max_(0, _ifc_max_(0, 0));
        } else {
            if ((temp !== null)) {
                var temp_sc = _ifc_max_(0, _ifc_max_(0, 0));
            }
        };
    }
    
;
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t43 = (i < Nk);
    if (((_$t43 instanceof Object) && (_$t43 !== null))) {
        _$t43._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
    } else {
        if ((_$t43 !== null)) {
            var _$t43_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t43 instanceof Object))) ? _$t43._sc : _$t43_sc)));
    for (; _$t43; ) {
        _$t46 = (4 * i);
        if (((_$t46 instanceof Object) && (_$t46 !== null))) {
            _$t46._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
        } else {
            if ((_$t46 !== null)) {
                var _$t46_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            }
        };
        _$t49 = (4 * i);
        if (((_$t49 instanceof Object) && (_$t49 !== null))) {
            _$t49._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
        } else {
            if ((_$t49 !== null)) {
                var _$t49_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            }
        };
        _$t48 = (_$t49 + 1);
        if (((_$t48 instanceof Object) && (_$t48 !== null))) {
            _$t48._sc = _ifc_max_(0, _ifc_max_(((((_$t49 instanceof Object))) ? _$t49._sc : _$t49_sc), 0));
        } else {
            if ((_$t48 !== null)) {
                var _$t48_sc = _ifc_max_(0, _ifc_max_(((((_$t49 instanceof Object))) ? _$t49._sc : _$t49_sc), 0));
            }
        };
        _$t52 = (4 * i);
        if (((_$t52 instanceof Object) && (_$t52 !== null))) {
            _$t52._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
        } else {
            if ((_$t52 !== null)) {
                var _$t52_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            }
        };
        _$t51 = (_$t52 + 2);
        if (((_$t51 instanceof Object) && (_$t51 !== null))) {
            _$t51._sc = _ifc_max_(0, _ifc_max_(((((_$t52 instanceof Object))) ? _$t52._sc : _$t52_sc), 0));
        } else {
            if ((_$t51 !== null)) {
                var _$t51_sc = _ifc_max_(0, _ifc_max_(((((_$t52 instanceof Object))) ? _$t52._sc : _$t52_sc), 0));
            }
        };
        _$t55 = (4 * i);
        if (((_$t55 instanceof Object) && (_$t55 !== null))) {
            _$t55._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
        } else {
            if ((_$t55 !== null)) {
                var _$t55_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            }
        };
        _$t54 = (_$t55 + 3);
        if (((_$t54 instanceof Object) && (_$t54 !== null))) {
            _$t54._sc = _ifc_max_(0, _ifc_max_(((((_$t55 instanceof Object))) ? _$t55._sc : _$t55_sc), 0));
        } else {
            if ((_$t54 !== null)) {
                var _$t54_sc = _ifc_max_(0, _ifc_max_(((((_$t55 instanceof Object))) ? _$t55._sc : _$t55_sc), 0));
            }
        };
        _$t53 = key[_$t54];
        if (((_$t53 instanceof Object) && (_$t53 !== null))) {
            _$t53._sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t54"] instanceof Object))) ? key["_$t54"]._sc : key["_$t54_sc"])));
        } else {
            if ((_$t53 !== null)) {
                var _$t53_sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t54"] instanceof Object))) ? key["_$t54"]._sc : key["_$t54_sc"])));
            }
        };
        _$t50 = key[_$t51];
        if (((_$t50 instanceof Object) && (_$t50 !== null))) {
            _$t50._sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t51"] instanceof Object))) ? key["_$t51"]._sc : key["_$t51_sc"])));
        } else {
            if ((_$t50 !== null)) {
                var _$t50_sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t51"] instanceof Object))) ? key["_$t51"]._sc : key["_$t51_sc"])));
            }
        };
        _$t47 = key[_$t48];
        if (((_$t47 instanceof Object) && (_$t47 !== null))) {
            _$t47._sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t48"] instanceof Object))) ? key["_$t48"]._sc : key["_$t48_sc"])));
        } else {
            if ((_$t47 !== null)) {
                var _$t47_sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t48"] instanceof Object))) ? key["_$t48"]._sc : key["_$t48_sc"])));
            }
        };
        _$t45 = key[_$t46];
        if (((_$t45 instanceof Object) && (_$t45 !== null))) {
            _$t45._sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t46"] instanceof Object))) ? key["_$t46"]._sc : key["_$t46_sc"])));
        } else {
            if ((_$t45 !== null)) {
                var _$t45_sc = _ifc_max_(0, ((((key instanceof Array))) ? key._sc : ((((key["_$t46"] instanceof Object))) ? key["_$t46"]._sc : key["_$t46_sc"])));
            }
        };
        var r = [_$t45,_$t47,_$t50,_$t53,];
        r._sc = _ifc_max_(0, _ifc_max_(0, 0, ((((_$t45 instanceof Object))) ? _$t45._sc : _$t45_sc), ((((_$t47 instanceof Object))) ? _$t47._sc : _$t47_sc), ((((_$t50 instanceof Object))) ? _$t50._sc : _$t50_sc), ((((_$t53 instanceof Object))) ? _$t53._sc : _$t53_sc)));
        w[i] = r;
        if ((w instanceof Array)) {
            w._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((r instanceof Object))) ? r._sc : r_sc), w._sc);
        } else {
            if ((w[i] instanceof Object)) w[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((r instanceof Object))) ? r._sc : r_sc));
             else {
                w["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((r instanceof Object))) ? r._sc : r_sc));
                w._sc = ((((w["i_sc"] >= w._sc))) ? w["i_sc"] : w._sc);
            }
        
        };
        _$t56 = i++;
        if (((_$t56 instanceof Object) && (_$t56 !== null))) {
            _$t56._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t56 !== null)) {
                var _$t56_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t43 = (i < Nk);
        if (((_$t43 instanceof Object) && (_$t43 !== null))) {
            _$t43._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
        } else {
            if ((_$t43 !== null)) {
                _$t43_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    _$t60 = (((Nr + 1)));
    if (((_$t60 instanceof Object) && (_$t60 !== null))) {
        _$t60._sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
    } else {
        if ((_$t60 !== null)) {
            var _$t60_sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
        }
    };
    _$t59 = (((Nb * _$t60)));
    if (((_$t59 instanceof Object) && (_$t59 !== null))) {
        _$t59._sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t60 instanceof Object))) ? _$t60._sc : _$t60_sc)));
    } else {
        if ((_$t59 !== null)) {
            var _$t59_sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t60 instanceof Object))) ? _$t60._sc : _$t60_sc)));
        }
    };
    var i = Nk;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, ((((Nk instanceof Object))) ? Nk._sc : Nk_sc));
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, ((((Nk instanceof Object))) ? Nk._sc : Nk_sc));
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t57 = (i < _$t59);
    if (((_$t57 instanceof Object) && (_$t57 !== null))) {
        _$t57._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t59 instanceof Object))) ? _$t59._sc : _$t59_sc)));
    } else {
        if ((_$t57 !== null)) {
            var _$t57_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t59 instanceof Object))) ? _$t59._sc : _$t59_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t57 instanceof Object))) ? _$t57._sc : _$t57_sc)));
    for (; _$t57; ) {
        if ((((Array && (Array._sc !== undefined))))) {
            _$t61 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t61);
            w[i] = new Array(4);
            if ((w instanceof Array)) {
                w._sc = _ifc_max_(_ifc_stack_.pop(), w._sc);
            } else {
                if ((w[i] instanceof Object)) w[i]._sc = _ifc_stack_.pop();
                 else {
                    w["i_sc"] = _ifc_stack_.pop();
                    w._sc = ((((w["i_sc"]._sc >= w._sc))) ? w["i_sc"]._sc : w._sc);
                }
            
            };
        }
         else if (Array) {
            w[i] = new Array(4);
            if ((w instanceof Array)) {
                w._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), 0), w._sc);
            } else {
                if ((w[i] instanceof Object)) w[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), 0));
                 else {
                    w["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), 0));
                    w._sc = ((((w["i_sc"] >= w._sc))) ? w["i_sc"] : w._sc);
                }
            
            };
        }
        
    ;
        var t = 0;
        if (((t instanceof Object) && (t !== null))) {
            t._sc = _ifc_max_(0, 0);
        } else {
            if ((t !== null)) {
                var t_sc = _ifc_max_(0, 0);
            }
        };
        ((((t instanceof Object))) ? t._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)) : t_sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)));
        _$t62 = (t < 4);
        if (((_$t62 instanceof Object) && (_$t62 !== null))) {
            _$t62._sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
        } else {
            if ((_$t62 !== null)) {
                var _$t62_sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t62 instanceof Object))) ? _$t62._sc : _$t62_sc)));
        for (; _$t62; ) {
            _$t64 = (i - 1);
            if (((_$t64 instanceof Object) && (_$t64 !== null))) {
                _$t64._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            } else {
                if ((_$t64 !== null)) {
                    var _$t64_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
                }
            };
            temp[t] = w[_$t64][t];
            if ((temp instanceof Array)) {
                temp._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((w[_$t64] instanceof Array))) ? w[_$t64]._sc : ((((w[_$t64][t] instanceof Object))) ? w[_$t64][t]._sc : w[_$t64]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 2834,\u000a    lineno: 76,\u000a    parentType: 49,\u000a    start: 2833,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])), temp._sc);
            } else {
                if ((temp[t] instanceof Object)) temp[t]._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((w[_$t64] instanceof Array))) ? w[_$t64]._sc : ((((w[_$t64][t] instanceof Object))) ? w[_$t64][t]._sc : w[_$t64]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 2834,\u000a    lineno: 76,\u000a    parentType: 49,\u000a    start: 2833,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
                 else {
                    temp["t_sc"] = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((w[_$t64] instanceof Array))) ? w[_$t64]._sc : ((((w[_$t64][t] instanceof Object))) ? w[_$t64][t]._sc : w[_$t64]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 2834,\u000a    lineno: 76,\u000a    parentType: 49,\u000a    start: 2833,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
                    temp._sc = ((((temp["t_sc"] >= temp._sc))) ? temp["t_sc"] : temp._sc);
                }
            
            };
            _$t65 = t++;
            if (((_$t65 instanceof Object) && (_$t65 !== null))) {
                _$t65._sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
            } else {
                if ((_$t65 !== null)) {
                    var _$t65_sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
                }
            };
            _$t62 = (t < 4);
            if (((_$t62 instanceof Object) && (_$t62 !== null))) {
                _$t62._sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
            } else {
                if ((_$t62 !== null)) {
                    _$t62_sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        _$t67 = (i % Nk);
        if (((_$t67 instanceof Object) && (_$t67 !== null))) {
            _$t67._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
        } else {
            if ((_$t67 !== null)) {
                var _$t67_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
            }
        };
        _$t66 = (_$t67 == 0);
        if (((_$t66 instanceof Object) && (_$t66 !== null))) {
            _$t66._sc = _ifc_max_(0, _ifc_max_(((((_$t67 instanceof Object))) ? _$t67._sc : _$t67_sc), 0));
        } else {
            if ((_$t66 !== null)) {
                var _$t66_sc = _ifc_max_(0, _ifc_max_(((((_$t67 instanceof Object))) ? _$t67._sc : _$t67_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t66 instanceof Object))) ? _$t66._sc : _$t66_sc)));
        if (_$t66) {
            if (((((Aes["rotWord"] && (Aes["rotWord"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "rotWord") || ("apply" === "rotWord"))))))))) {
                _$t69 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
                _ifc_stack_.push(((((temp instanceof Object))) ? temp._sc : temp_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t69);
                var _$t68 = Aes["rotWord"](temp);
                if ((_$t68 instanceof Object)) {
                    _$t68._sc = _ifc_stack_.pop();
                } else {
                    var _$t68_sc = _ifc_stack_.pop();
                };
            }
             else if (Aes["rotWord"]) {
                var _$t68 = Aes["rotWord"](temp);
                if (((_$t68 instanceof Object) && (_$t68 !== null))) {
                    _$t68._sc = _ifc_max_(0, _ifc_max_(0, ((((temp instanceof Object))) ? temp._sc : temp_sc)));
                } else {
                    if ((_$t68 !== null)) {
                        var _$t68_sc = _ifc_max_(0, _ifc_max_(0, ((((temp instanceof Object))) ? temp._sc : temp_sc)));
                    }
                };
            }
            
        ;
            if (((((Aes["subWord"] && (Aes["subWord"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "subWord") || ("apply" === "subWord"))))))))) {
                _$t70 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
                _ifc_stack_.push(((((_$t68 instanceof Object))) ? _$t68._sc : _$t68_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t70);
                temp = Aes["subWord"](_$t68);
                if ((temp instanceof Object)) {
                    temp._sc = _ifc_stack_.pop();
                } else {
                    temp_sc = _ifc_stack_.pop();
                };
            }
             else if (Aes["subWord"]) {
                temp = Aes["subWord"](_$t68);
                if (((temp instanceof Object) && (temp !== null))) {
                    temp._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t68 instanceof Object))) ? _$t68._sc : _$t68_sc)));
                } else {
                    if ((temp !== null)) {
                        temp_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t68 instanceof Object))) ? _$t68._sc : _$t68_sc)));
                    }
                };
            }
            
        ;
            var t = 0;
            if (((t instanceof Object) && (t !== null))) {
                t._sc = _ifc_max_(0, 0);
            } else {
                if ((t !== null)) {
                    var t_sc = _ifc_max_(0, 0);
                }
            };
            ((((t instanceof Object))) ? t._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)) : t_sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)));
            _$t71 = (t < 4);
            if (((_$t71 instanceof Object) && (_$t71 !== null))) {
                _$t71._sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
            } else {
                if ((_$t71 !== null)) {
                    var _$t71_sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
                }
            };
            _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t71 instanceof Object))) ? _$t71._sc : _$t71_sc)));
            for (; _$t71; ) {
                _$t73 = (i / Nk);
                if (((_$t73 instanceof Object) && (_$t73 !== null))) {
                    _$t73._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
                } else {
                    if ((_$t73 !== null)) {
                        var _$t73_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
                    }
                };
                temp[t] ^= Aes.rCon[_$t73][t];
                if ((temp instanceof Array)) {
                    temp._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((Aes["rCon"][_$t73] instanceof Array))) ? Aes["rCon"][_$t73]._sc : ((((Aes["rCon"][_$t73][t] instanceof Object))) ? Aes["rCon"][_$t73][t]._sc : Aes["rCon"][_$t73]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3030,\u000a    lineno: 80,\u000a    parentType: 49,\u000a    start: 3029,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])), temp._sc);
                } else {
                    if ((temp[t] instanceof Object)) temp[t]._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((Aes["rCon"][_$t73] instanceof Array))) ? Aes["rCon"][_$t73]._sc : ((((Aes["rCon"][_$t73][t] instanceof Object))) ? Aes["rCon"][_$t73][t]._sc : Aes["rCon"][_$t73]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3030,\u000a    lineno: 80,\u000a    parentType: 49,\u000a    start: 3029,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
                     else {
                        temp["t_sc"] = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((Aes["rCon"][_$t73] instanceof Array))) ? Aes["rCon"][_$t73]._sc : ((((Aes["rCon"][_$t73][t] instanceof Object))) ? Aes["rCon"][_$t73][t]._sc : Aes["rCon"][_$t73]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3030,\u000a    lineno: 80,\u000a    parentType: 49,\u000a    start: 3029,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
                        temp._sc = ((((temp["t_sc"] >= temp._sc))) ? temp["t_sc"] : temp._sc);
                    }
                
                };
                _$t74 = t++;
                if (((_$t74 instanceof Object) && (_$t74 !== null))) {
                    _$t74._sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
                } else {
                    if ((_$t74 !== null)) {
                        var _$t74_sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
                    }
                };
                _$t71 = (t < 4);
                if (((_$t71 instanceof Object) && (_$t71 !== null))) {
                    _$t71._sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
                } else {
                    if ((_$t71 !== null)) {
                        _$t71_sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
                    }
                };
            };
            _ifc_stack_.pop();
        }
         else {
            _$t78 = (i % Nk);
            if (((_$t78 instanceof Object) && (_$t78 !== null))) {
                _$t78._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
            } else {
                if ((_$t78 !== null)) {
                    var _$t78_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
                }
            };
            _$t77 = (_$t78 == 4);
            if (((_$t77 instanceof Object) && (_$t77 !== null))) {
                _$t77._sc = _ifc_max_(0, _ifc_max_(((((_$t78 instanceof Object))) ? _$t78._sc : _$t78_sc), 0));
            } else {
                if ((_$t77 !== null)) {
                    var _$t77_sc = _ifc_max_(0, _ifc_max_(((((_$t78 instanceof Object))) ? _$t78._sc : _$t78_sc), 0));
                }
            };
            _$t76 = (Nk > 6);
            if (((_$t76 instanceof Object) && (_$t76 !== null))) {
                _$t76._sc = _ifc_max_(0, _ifc_max_(((((Nk instanceof Object))) ? Nk._sc : Nk_sc), 0));
            } else {
                if ((_$t76 !== null)) {
                    var _$t76_sc = _ifc_max_(0, _ifc_max_(((((Nk instanceof Object))) ? Nk._sc : Nk_sc), 0));
                }
            };
            _$t75 = (_$t76 && _$t77);
            if (((_$t75 instanceof Object) && (_$t75 !== null))) {
                _$t75._sc = _ifc_max_(0, _ifc_max_(((((_$t76 instanceof Object))) ? _$t76._sc : _$t76_sc), ((((_$t77 instanceof Object))) ? _$t77._sc : _$t77_sc)));
            } else {
                if ((_$t75 !== null)) {
                    var _$t75_sc = _ifc_max_(0, _ifc_max_(((((_$t76 instanceof Object))) ? _$t76._sc : _$t76_sc), ((((_$t77 instanceof Object))) ? _$t77._sc : _$t77_sc)));
                }
            };
            _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t75 instanceof Object))) ? _$t75._sc : _$t75_sc)));
            if (_$t75) {
                if (((((Aes["subWord"] && (Aes["subWord"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "subWord") || ("apply" === "subWord"))))))))) {
                    _$t79 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
                    _ifc_stack_.push(((((temp instanceof Object))) ? temp._sc : temp_sc));
                    _ifc_stack_.push(1);
                    _ifc_stack_.push(_$t79);
                    temp = Aes["subWord"](temp);
                    if ((temp instanceof Object)) {
                        temp._sc = _ifc_stack_.pop();
                    } else {
                        temp_sc = _ifc_stack_.pop();
                    };
                }
                 else if (Aes["subWord"]) {
                    temp = Aes["subWord"](temp);
                    if (((temp instanceof Object) && (temp !== null))) {
                        temp._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((temp instanceof Object))) ? temp._sc : temp_sc)));
                    } else {
                        if ((temp !== null)) {
                            temp_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((temp instanceof Object))) ? temp._sc : temp_sc)));
                        }
                    };
                }
                
            ;
            }
        ;
            _ifc_stack_.pop();
        }
    ;
        _ifc_stack_.pop();
        var t = 0;
        if (((t instanceof Object) && (t !== null))) {
            t._sc = _ifc_max_(0, 0);
        } else {
            if ((t !== null)) {
                var t_sc = _ifc_max_(0, 0);
            }
        };
        ((((t instanceof Object))) ? t._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)) : t_sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc)));
        _$t80 = (t < 4);
        if (((_$t80 instanceof Object) && (_$t80 !== null))) {
            _$t80._sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
        } else {
            if ((_$t80 !== null)) {
                var _$t80_sc = _ifc_max_(0, _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t80 instanceof Object))) ? _$t80._sc : _$t80_sc)));
        for (; _$t80; ) {
            _$t83 = (i - Nk);
            if (((_$t83 instanceof Object) && (_$t83 !== null))) {
                _$t83._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
            } else {
                if ((_$t83 !== null)) {
                    var _$t83_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((Nk instanceof Object))) ? Nk._sc : Nk_sc)));
                }
            };
            _$t84 = temp[t];
            if (((_$t84 instanceof Object) && (_$t84 !== null))) {
                _$t84._sc = _ifc_max_(0, ((((temp instanceof Array))) ? temp._sc : ((((temp["t"] instanceof Object))) ? temp["t"]._sc : temp["t_sc"])));
            } else {
                if ((_$t84 !== null)) {
                    var _$t84_sc = _ifc_max_(0, ((((temp instanceof Array))) ? temp._sc : ((((temp["t"] instanceof Object))) ? temp["t"]._sc : temp["t_sc"])));
                }
            };
            _$t82 = w[_$t83][t];
            if (((_$t82 instanceof Object) && (_$t82 !== null))) {
                _$t82._sc = _ifc_max_(0, ((((w[_$t83] instanceof Array))) ? w[_$t83]._sc : ((((w[_$t83][t] instanceof Object))) ? w[_$t83][t]._sc : w[_$t83]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3284,\u000a    lineno: 87,\u000a    parentType: 49,\u000a    start: 3283,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
            } else {
                if ((_$t82 !== null)) {
                    var _$t82_sc = _ifc_max_(0, ((((w[_$t83] instanceof Array))) ? w[_$t83]._sc : ((((w[_$t83][t] instanceof Object))) ? w[_$t83][t]._sc : w[_$t83]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3284,\u000a    lineno: 87,\u000a    parentType: 49,\u000a    start: 3283,\u000a    tokenizer: [object Object],\u000a    value: t\u000a}_sc"])));
                }
            };
            w[i][t] = (_$t82 ^ _$t84);
            if ((w[i] instanceof Array)) {
                w[i]._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t82 instanceof Object))) ? _$t82._sc : _$t82_sc), ((((_$t84 instanceof Object))) ? _$t84._sc : _$t84_sc)), w[i]._sc);
            } else {
                if ((w[i][t] instanceof Object)) w[i][t]._sc = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t82 instanceof Object))) ? _$t82._sc : _$t82_sc), ((((_$t84 instanceof Object))) ? _$t84._sc : _$t84_sc)));
                 else {
                    w[i]["t_sc"] = _ifc_max_(_$pc(0), ((((t instanceof Object))) ? t._sc : t_sc), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t82 instanceof Object))) ? _$t82._sc : _$t82_sc), ((((_$t84 instanceof Object))) ? _$t84._sc : _$t84_sc)));
                    w[i]._sc = ((((w[i]["t_sc"] >= w[i]._sc))) ? w[i]["t_sc"] : w[i]._sc);
                }
            
            };
            _$t85 = t++;
            if (((_$t85 instanceof Object) && (_$t85 !== null))) {
                _$t85._sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
            } else {
                if ((_$t85 !== null)) {
                    var _$t85_sc = _ifc_max_(0, ((((t instanceof Object))) ? t._sc : t_sc));
                }
            };
            _$t80 = (t < 4);
            if (((_$t80 instanceof Object) && (_$t80 !== null))) {
                _$t80._sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
            } else {
                if ((_$t80 !== null)) {
                    _$t80_sc = _ifc_max_(_$pc(0), _ifc_max_(((((t instanceof Object))) ? t._sc : t_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        _$t86 = i++;
        if (((_$t86 instanceof Object) && (_$t86 !== null))) {
            _$t86._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t86 !== null)) {
                var _$t86_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t88 = (((Nr + 1)));
        if (((_$t88 instanceof Object) && (_$t88 !== null))) {
            _$t88._sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
        } else {
            if ((_$t88 !== null)) {
                var _$t88_sc = _ifc_max_(0, _ifc_max_(((((Nr instanceof Object))) ? Nr._sc : Nr_sc), 0));
            }
        };
        _$t87 = (((Nb * _$t88)));
        if (((_$t87 instanceof Object) && (_$t87 !== null))) {
            _$t87._sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t88 instanceof Object))) ? _$t88._sc : _$t88_sc)));
        } else {
            if ((_$t87 !== null)) {
                var _$t87_sc = _ifc_max_(0, _ifc_max_(((((Nb instanceof Object))) ? Nb._sc : Nb_sc), ((((_$t88 instanceof Object))) ? _$t88._sc : _$t88_sc)));
            }
        };
        _$t57 = (i < _$t87);
        if (((_$t57 instanceof Object) && (_$t57 !== null))) {
            _$t57._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t87 instanceof Object))) ? _$t87._sc : _$t87_sc)));
        } else {
            if ((_$t57 !== null)) {
                _$t57_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t87 instanceof Object))) ? _$t87._sc : _$t87_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    _$t89 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), ((((w instanceof Object))) ? w._sc : w_sc));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t89); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return w;
};
Aes["keyExpansion"]._sc = 0;
Aes.subBytes = function(s, Nb) {
    var r = 0;
    if (((r instanceof Object) && (r !== null))) {
        r._sc = _ifc_max_(0, 0);
    } else {
        if ((r !== null)) {
            var r_sc = _ifc_max_(0, 0);
        }
    };
    ((((r instanceof Object))) ? r._sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)) : r_sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)));
    _$t90 = (r < 4);
    if (((_$t90 instanceof Object) && (_$t90 !== null))) {
        _$t90._sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
    } else {
        if ((_$t90 !== null)) {
            var _$t90_sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t90 instanceof Object))) ? _$t90._sc : _$t90_sc)));
    for (; _$t90; ) {
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t92 = (c < Nb);
        if (((_$t92 instanceof Object) && (_$t92 !== null))) {
            _$t92._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 1)] : 0)));
        } else {
            if ((_$t92 !== null)) {
                var _$t92_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 1)] : 0)));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t92 instanceof Object))) ? _$t92._sc : _$t92_sc)));
        for (; _$t92; ) {
            _$t94 = s[r][c];
            if (((_$t94 instanceof Object) && (_$t94 !== null))) {
                _$t94._sc = _ifc_max_(0, ((((s[r] instanceof Array))) ? s[r]._sc : ((((s[r][c] instanceof Object))) ? s[r][c]._sc : s[r]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3498,\u000a    lineno: 100,\u000a    parentType: 49,\u000a    start: 3497,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
            } else {
                if ((_$t94 !== null)) {
                    var _$t94_sc = _ifc_max_(0, ((((s[r] instanceof Array))) ? s[r]._sc : ((((s[r][c] instanceof Object))) ? s[r][c]._sc : s[r]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 3498,\u000a    lineno: 100,\u000a    parentType: 49,\u000a    start: 3497,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                }
            };
            s[r][c] = Aes.sBox[_$t94];
            if ((s[r] instanceof Array)) {
                s[r]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t94] instanceof Object))) ? Aes["sBox"][_$t94]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t94\u000a}_sc"])), s[r]._sc);
            } else {
                if ((s[r][c] instanceof Object)) s[r][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t94] instanceof Object))) ? Aes["sBox"][_$t94]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t94\u000a}_sc"])));
                 else {
                    s[r]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t94] instanceof Object))) ? Aes["sBox"][_$t94]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 5,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t94\u000a}_sc"])));
                    s[r]._sc = ((((s[r]["c_sc"] >= s[r]._sc))) ? s[r]["c_sc"] : s[r]._sc);
                }
            
            };
            _$t95 = c++;
            if (((_$t95 instanceof Object) && (_$t95 !== null))) {
                _$t95._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t95 !== null)) {
                    var _$t95_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t92 = (c < Nb);
            if (((_$t92 instanceof Object) && (_$t92 !== null))) {
                _$t92._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 1)] : 0)));
            } else {
                if ((_$t92 !== null)) {
                    _$t92_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 1)] : 0)));
                }
            };
        };
        _ifc_stack_.pop();
        _$t96 = r++;
        if (((_$t96 instanceof Object) && (_$t96 !== null))) {
            _$t96._sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
        } else {
            if ((_$t96 !== null)) {
                var _$t96_sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
            }
        };
        _$t90 = (r < 4);
        if (((_$t90 instanceof Object) && (_$t90 !== null))) {
            _$t90._sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        } else {
            if ((_$t90 !== null)) {
                _$t90_sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    _$t97 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t97); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return s;
};
Aes["subBytes"]._sc = 0;
Aes.shiftRows = function(s, Nb) {
    if ((((Array && (Array._sc !== undefined))))) {
        _$t98 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t98);
        var t = new Array(4);
        if ((t instanceof Object)) {
            t._sc = _ifc_stack_.pop();
        } else {
            var t_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var t = new Array(4);
        if (((t instanceof Object) && (t !== null))) {
            t._sc = _ifc_max_(0, _ifc_max_(0, 0));
        } else {
            if ((t !== null)) {
                var t_sc = _ifc_max_(0, _ifc_max_(0, 0));
            }
        };
    }
    
;
    var r = 1;
    if (((r instanceof Object) && (r !== null))) {
        r._sc = _ifc_max_(0, 0);
    } else {
        if ((r !== null)) {
            var r_sc = _ifc_max_(0, 0);
        }
    };
    ((((r instanceof Object))) ? r._sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)) : r_sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)));
    _$t99 = (r < 4);
    if (((_$t99 instanceof Object) && (_$t99 !== null))) {
        _$t99._sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
    } else {
        if ((_$t99 !== null)) {
            var _$t99_sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t99 instanceof Object))) ? _$t99._sc : _$t99_sc)));
    for (; _$t99; ) {
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t101 = (c < 4);
        if (((_$t101 instanceof Object) && (_$t101 !== null))) {
            _$t101._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t101 !== null)) {
                var _$t101_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t101 instanceof Object))) ? _$t101._sc : _$t101_sc)));
        for (; _$t101; ) {
            _$t104 = (((c + r)));
            if (((_$t104 instanceof Object) && (_$t104 !== null))) {
                _$t104._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc)));
            } else {
                if ((_$t104 !== null)) {
                    var _$t104_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc)));
                }
            };
            _$t103 = (_$t104 % Nb);
            if (((_$t103 instanceof Object) && (_$t103 !== null))) {
                _$t103._sc = _ifc_max_(0, _ifc_max_(((((_$t104 instanceof Object))) ? _$t104._sc : _$t104_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 1)] : 0)));
            } else {
                if ((_$t103 !== null)) {
                    var _$t103_sc = _ifc_max_(0, _ifc_max_(((((_$t104 instanceof Object))) ? _$t104._sc : _$t104_sc), (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 1)] : 0)));
                }
            };
            t[c] = s[r][_$t103];
            if ((t instanceof Array)) {
                t._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((s[r] instanceof Array))) ? s[r]._sc : ((((s[r][_$t103] instanceof Object))) ? s[r][_$t103]._sc : s[r]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t103\u000a}_sc"])), t._sc);
            } else {
                if ((t[c] instanceof Object)) t[c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((s[r] instanceof Array))) ? s[r]._sc : ((((s[r][_$t103] instanceof Object))) ? s[r][_$t103]._sc : s[r]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t103\u000a}_sc"])));
                 else {
                    t["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((s[r] instanceof Array))) ? s[r]._sc : ((((s[r][_$t103] instanceof Object))) ? s[r][_$t103]._sc : s[r]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t103\u000a}_sc"])));
                    t._sc = ((((t["c_sc"] >= t._sc))) ? t["c_sc"] : t._sc);
                }
            
            };
            _$t105 = c++;
            if (((_$t105 instanceof Object) && (_$t105 !== null))) {
                _$t105._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t105 !== null)) {
                    var _$t105_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t101 = (c < 4);
            if (((_$t101 instanceof Object) && (_$t101 !== null))) {
                _$t101._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t101 !== null)) {
                    _$t101_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t106 = (c < 4);
        if (((_$t106 instanceof Object) && (_$t106 !== null))) {
            _$t106._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t106 !== null)) {
                var _$t106_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t106 instanceof Object))) ? _$t106._sc : _$t106_sc)));
        for (; _$t106; ) {
            s[r][c] = t[c];
            if ((s[r] instanceof Array)) {
                s[r]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((t instanceof Array))) ? t._sc : ((((t["c"] instanceof Object))) ? t["c"]._sc : t["c_sc"])), s[r]._sc);
            } else {
                if ((s[r][c] instanceof Object)) s[r][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((t instanceof Array))) ? t._sc : ((((t["c"] instanceof Object))) ? t["c"]._sc : t["c_sc"])));
                 else {
                    s[r]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((t instanceof Array))) ? t._sc : ((((t["c"] instanceof Object))) ? t["c"]._sc : t["c_sc"])));
                    s[r]._sc = ((((s[r]["c_sc"] >= s[r]._sc))) ? s[r]["c_sc"] : s[r]._sc);
                }
            
            };
            _$t108 = c++;
            if (((_$t108 instanceof Object) && (_$t108 !== null))) {
                _$t108._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t108 !== null)) {
                    var _$t108_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t106 = (c < 4);
            if (((_$t106 instanceof Object) && (_$t106 !== null))) {
                _$t106._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t106 !== null)) {
                    _$t106_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        _$t109 = r++;
        if (((_$t109 instanceof Object) && (_$t109 !== null))) {
            _$t109._sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
        } else {
            if ((_$t109 !== null)) {
                var _$t109_sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
            }
        };
        _$t99 = (r < 4);
        if (((_$t99 instanceof Object) && (_$t99 !== null))) {
            _$t99._sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        } else {
            if ((_$t99 !== null)) {
                _$t99_sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    _$t110 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t110); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return s;
};
Aes["shiftRows"]._sc = 0;
Aes.mixColumns = function(s, Nb) {
    var c = 0;
    if (((c instanceof Object) && (c !== null))) {
        c._sc = _ifc_max_(0, 0);
    } else {
        if ((c !== null)) {
            var c_sc = _ifc_max_(0, 0);
        }
    };
    ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
    _$t111 = (c < 4);
    if (((_$t111 instanceof Object) && (_$t111 !== null))) {
        _$t111._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
    } else {
        if ((_$t111 !== null)) {
            var _$t111_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t111 instanceof Object))) ? _$t111._sc : _$t111_sc)));
    for (; _$t111; ) {
        if ((((Array && (Array._sc !== undefined))))) {
            _$t113 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t113);
            var a = new Array(4);
            if ((a instanceof Object)) {
                a._sc = _ifc_stack_.pop();
            } else {
                var a_sc = _ifc_stack_.pop();
            };
        }
         else if (Array) {
            var a = new Array(4);
            if (((a instanceof Object) && (a !== null))) {
                a._sc = _ifc_max_(0, _ifc_max_(0, 0));
            } else {
                if ((a !== null)) {
                    var a_sc = _ifc_max_(0, _ifc_max_(0, 0));
                }
            };
        }
        
    ;
        if ((((Array && (Array._sc !== undefined))))) {
            _$t114 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t114);
            var b = new Array(4);
            if ((b instanceof Object)) {
                b._sc = _ifc_stack_.pop();
            } else {
                var b_sc = _ifc_stack_.pop();
            };
        }
         else if (Array) {
            var b = new Array(4);
            if (((b instanceof Object) && (b !== null))) {
                b._sc = _ifc_max_(0, _ifc_max_(0, 0));
            } else {
                if ((b !== null)) {
                    var b_sc = _ifc_max_(0, _ifc_max_(0, 0));
                }
            };
        }
        
    ;
        var i = 0;
        if (((i instanceof Object) && (i !== null))) {
            i._sc = _ifc_max_(0, 0);
        } else {
            if ((i !== null)) {
                var i_sc = _ifc_max_(0, 0);
            }
        };
        ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
        _$t115 = (i < 4);
        if (((_$t115 instanceof Object) && (_$t115 !== null))) {
            _$t115._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t115 !== null)) {
                var _$t115_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t115 instanceof Object))) ? _$t115._sc : _$t115_sc)));
        for (; _$t115; ) {
            a[i] = s[i][c];
            if ((a instanceof Array)) {
                a._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4347,\u000a    lineno: 129,\u000a    parentType: 49,\u000a    start: 4346,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])), a._sc);
            } else {
                if ((a[i] instanceof Object)) a[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4347,\u000a    lineno: 129,\u000a    parentType: 49,\u000a    start: 4346,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                 else {
                    a["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4347,\u000a    lineno: 129,\u000a    parentType: 49,\u000a    start: 4346,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                    a._sc = ((((a["i_sc"] >= a._sc))) ? a["i_sc"] : a._sc);
                }
            
            };
            _$t118 = s[i][c];
            if (((_$t118 instanceof Object) && (_$t118 !== null))) {
                _$t118._sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4375,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4374,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
            } else {
                if ((_$t118 !== null)) {
                    var _$t118_sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4375,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4374,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                }
            };
            _$t121 = s[i][c];
            if (((_$t121 instanceof Object) && (_$t121 !== null))) {
                _$t121._sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4390,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4389,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
            } else {
                if ((_$t121 !== null)) {
                    var _$t121_sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4390,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4389,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                }
            };
            _$t120 = (_$t121 << 1);
            if (((_$t120 instanceof Object) && (_$t120 !== null))) {
                _$t120._sc = _ifc_max_(0, _ifc_max_(((((_$t121 instanceof Object))) ? _$t121._sc : _$t121_sc), 0));
            } else {
                if ((_$t120 !== null)) {
                    var _$t120_sc = _ifc_max_(0, _ifc_max_(((((_$t121 instanceof Object))) ? _$t121._sc : _$t121_sc), 0));
                }
            };
            _$t123 = s[i][c];
            if (((_$t123 instanceof Object) && (_$t123 !== null))) {
                _$t123._sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4412,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4411,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
            } else {
                if ((_$t123 !== null)) {
                    var _$t123_sc = _ifc_max_(0, ((((s[i] instanceof Array))) ? s[i]._sc : ((((s[i][c] instanceof Object))) ? s[i][c]._sc : s[i]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 4412,\u000a    lineno: 130,\u000a    parentType: 49,\u000a    start: 4411,\u000a    tokenizer: [object Object],\u000a    value: c\u000a}_sc"])));
                }
            };
            _$t122 = (_$t123 << 1);
            if (((_$t122 instanceof Object) && (_$t122 !== null))) {
                _$t122._sc = _ifc_max_(0, _ifc_max_(((((_$t123 instanceof Object))) ? _$t123._sc : _$t123_sc), 0));
            } else {
                if ((_$t122 !== null)) {
                    var _$t122_sc = _ifc_max_(0, _ifc_max_(((((_$t123 instanceof Object))) ? _$t123._sc : _$t123_sc), 0));
                }
            };
            _$t119 = (_$t120 ^ 283);
            if (((_$t119 instanceof Object) && (_$t119 !== null))) {
                _$t119._sc = _ifc_max_(0, _ifc_max_(((((_$t120 instanceof Object))) ? _$t120._sc : _$t120_sc), 0));
            } else {
                if ((_$t119 !== null)) {
                    var _$t119_sc = _ifc_max_(0, _ifc_max_(((((_$t120 instanceof Object))) ? _$t120._sc : _$t120_sc), 0));
                }
            };
            _$t117 = (_$t118 & 128);
            if (((_$t117 instanceof Object) && (_$t117 !== null))) {
                _$t117._sc = _ifc_max_(0, _ifc_max_(((((_$t118 instanceof Object))) ? _$t118._sc : _$t118_sc), 0));
            } else {
                if ((_$t117 !== null)) {
                    var _$t117_sc = _ifc_max_(0, _ifc_max_(((((_$t118 instanceof Object))) ? _$t118._sc : _$t118_sc), 0));
                }
            };
            b[i] = (_$t117 ? _$t119 : _$t122);
            if ((b instanceof Array)) {
                b._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t117 instanceof Object))) ? _$t117._sc : _$t117_sc), ((((_$t119 instanceof Object))) ? _$t119._sc : _$t119_sc), ((((_$t122 instanceof Object))) ? _$t122._sc : _$t122_sc)), b._sc);
            } else {
                if ((b[i] instanceof Object)) b[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t117 instanceof Object))) ? _$t117._sc : _$t117_sc), ((((_$t119 instanceof Object))) ? _$t119._sc : _$t119_sc), ((((_$t122 instanceof Object))) ? _$t122._sc : _$t122_sc)));
                 else {
                    b["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t117 instanceof Object))) ? _$t117._sc : _$t117_sc), ((((_$t119 instanceof Object))) ? _$t119._sc : _$t119_sc), ((((_$t122 instanceof Object))) ? _$t122._sc : _$t122_sc)));
                    b._sc = ((((b["i_sc"] >= b._sc))) ? b["i_sc"] : b._sc);
                }
            
            };
            _$t124 = i++;
            if (((_$t124 instanceof Object) && (_$t124 !== null))) {
                _$t124._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            } else {
                if ((_$t124 !== null)) {
                    var _$t124_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
                }
            };
            _$t115 = (i < 4);
            if (((_$t115 instanceof Object) && (_$t115 !== null))) {
                _$t115._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            } else {
                if ((_$t115 !== null)) {
                    _$t115_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        _$t129 = a[1];
        if (((_$t129 instanceof Object) && (_$t129 !== null))) {
            _$t129._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
        } else {
            if ((_$t129 !== null)) {
                var _$t129_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
            }
        };
        _$t128 = b[0];
        if (((_$t128 instanceof Object) && (_$t128 !== null))) {
            _$t128._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["0"] instanceof Object))) ? b["0"]._sc : b["0_sc"])));
        } else {
            if ((_$t128 !== null)) {
                var _$t128_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["0"] instanceof Object))) ? b["0"]._sc : b["0_sc"])));
            }
        };
        _$t130 = b[1];
        if (((_$t130 instanceof Object) && (_$t130 !== null))) {
            _$t130._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["1"] instanceof Object))) ? b["1"]._sc : b["1_sc"])));
        } else {
            if ((_$t130 !== null)) {
                var _$t130_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["1"] instanceof Object))) ? b["1"]._sc : b["1_sc"])));
            }
        };
        _$t127 = (_$t128 ^ _$t129);
        if (((_$t127 instanceof Object) && (_$t127 !== null))) {
            _$t127._sc = _ifc_max_(0, _ifc_max_(((((_$t128 instanceof Object))) ? _$t128._sc : _$t128_sc), ((((_$t129 instanceof Object))) ? _$t129._sc : _$t129_sc)));
        } else {
            if ((_$t127 !== null)) {
                var _$t127_sc = _ifc_max_(0, _ifc_max_(((((_$t128 instanceof Object))) ? _$t128._sc : _$t128_sc), ((((_$t129 instanceof Object))) ? _$t129._sc : _$t129_sc)));
            }
        };
        _$t131 = a[2];
        if (((_$t131 instanceof Object) && (_$t131 !== null))) {
            _$t131._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
        } else {
            if ((_$t131 !== null)) {
                var _$t131_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
            }
        };
        _$t126 = (_$t127 ^ _$t130);
        if (((_$t126 instanceof Object) && (_$t126 !== null))) {
            _$t126._sc = _ifc_max_(0, _ifc_max_(((((_$t127 instanceof Object))) ? _$t127._sc : _$t127_sc), ((((_$t130 instanceof Object))) ? _$t130._sc : _$t130_sc)));
        } else {
            if ((_$t126 !== null)) {
                var _$t126_sc = _ifc_max_(0, _ifc_max_(((((_$t127 instanceof Object))) ? _$t127._sc : _$t127_sc), ((((_$t130 instanceof Object))) ? _$t130._sc : _$t130_sc)));
            }
        };
        _$t132 = a[3];
        if (((_$t132 instanceof Object) && (_$t132 !== null))) {
            _$t132._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
        } else {
            if ((_$t132 !== null)) {
                var _$t132_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
            }
        };
        _$t125 = (_$t126 ^ _$t131);
        if (((_$t125 instanceof Object) && (_$t125 !== null))) {
            _$t125._sc = _ifc_max_(0, _ifc_max_(((((_$t126 instanceof Object))) ? _$t126._sc : _$t126_sc), ((((_$t131 instanceof Object))) ? _$t131._sc : _$t131_sc)));
        } else {
            if ((_$t125 !== null)) {
                var _$t125_sc = _ifc_max_(0, _ifc_max_(((((_$t126 instanceof Object))) ? _$t126._sc : _$t126_sc), ((((_$t131 instanceof Object))) ? _$t131._sc : _$t131_sc)));
            }
        };
        s[0][c] = (_$t125 ^ _$t132);
        if ((s[0] instanceof Array)) {
            s[0]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t125 instanceof Object))) ? _$t125._sc : _$t125_sc), ((((_$t132 instanceof Object))) ? _$t132._sc : _$t132_sc)), s[0]._sc);
        } else {
            if ((s[0][c] instanceof Object)) s[0][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t125 instanceof Object))) ? _$t125._sc : _$t125_sc), ((((_$t132 instanceof Object))) ? _$t132._sc : _$t132_sc)));
             else {
                s[0]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t125 instanceof Object))) ? _$t125._sc : _$t125_sc), ((((_$t132 instanceof Object))) ? _$t132._sc : _$t132_sc)));
                s[0]._sc = ((((s[0]["c_sc"] >= s[0]._sc))) ? s[0]["c_sc"] : s[0]._sc);
            }
        
        };
        _$t137 = b[1];
        if (((_$t137 instanceof Object) && (_$t137 !== null))) {
            _$t137._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["1"] instanceof Object))) ? b["1"]._sc : b["1_sc"])));
        } else {
            if ((_$t137 !== null)) {
                var _$t137_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["1"] instanceof Object))) ? b["1"]._sc : b["1_sc"])));
            }
        };
        _$t136 = a[0];
        if (((_$t136 instanceof Object) && (_$t136 !== null))) {
            _$t136._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
        } else {
            if ((_$t136 !== null)) {
                var _$t136_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
            }
        };
        _$t138 = a[2];
        if (((_$t138 instanceof Object) && (_$t138 !== null))) {
            _$t138._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
        } else {
            if ((_$t138 !== null)) {
                var _$t138_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
            }
        };
        _$t135 = (_$t136 ^ _$t137);
        if (((_$t135 instanceof Object) && (_$t135 !== null))) {
            _$t135._sc = _ifc_max_(0, _ifc_max_(((((_$t136 instanceof Object))) ? _$t136._sc : _$t136_sc), ((((_$t137 instanceof Object))) ? _$t137._sc : _$t137_sc)));
        } else {
            if ((_$t135 !== null)) {
                var _$t135_sc = _ifc_max_(0, _ifc_max_(((((_$t136 instanceof Object))) ? _$t136._sc : _$t136_sc), ((((_$t137 instanceof Object))) ? _$t137._sc : _$t137_sc)));
            }
        };
        _$t139 = b[2];
        if (((_$t139 instanceof Object) && (_$t139 !== null))) {
            _$t139._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["2"] instanceof Object))) ? b["2"]._sc : b["2_sc"])));
        } else {
            if ((_$t139 !== null)) {
                var _$t139_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["2"] instanceof Object))) ? b["2"]._sc : b["2_sc"])));
            }
        };
        _$t134 = (_$t135 ^ _$t138);
        if (((_$t134 instanceof Object) && (_$t134 !== null))) {
            _$t134._sc = _ifc_max_(0, _ifc_max_(((((_$t135 instanceof Object))) ? _$t135._sc : _$t135_sc), ((((_$t138 instanceof Object))) ? _$t138._sc : _$t138_sc)));
        } else {
            if ((_$t134 !== null)) {
                var _$t134_sc = _ifc_max_(0, _ifc_max_(((((_$t135 instanceof Object))) ? _$t135._sc : _$t135_sc), ((((_$t138 instanceof Object))) ? _$t138._sc : _$t138_sc)));
            }
        };
        _$t140 = a[3];
        if (((_$t140 instanceof Object) && (_$t140 !== null))) {
            _$t140._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
        } else {
            if ((_$t140 !== null)) {
                var _$t140_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
            }
        };
        _$t133 = (_$t134 ^ _$t139);
        if (((_$t133 instanceof Object) && (_$t133 !== null))) {
            _$t133._sc = _ifc_max_(0, _ifc_max_(((((_$t134 instanceof Object))) ? _$t134._sc : _$t134_sc), ((((_$t139 instanceof Object))) ? _$t139._sc : _$t139_sc)));
        } else {
            if ((_$t133 !== null)) {
                var _$t133_sc = _ifc_max_(0, _ifc_max_(((((_$t134 instanceof Object))) ? _$t134._sc : _$t134_sc), ((((_$t139 instanceof Object))) ? _$t139._sc : _$t139_sc)));
            }
        };
        s[1][c] = (_$t133 ^ _$t140);
        if ((s[1] instanceof Array)) {
            s[1]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t133 instanceof Object))) ? _$t133._sc : _$t133_sc), ((((_$t140 instanceof Object))) ? _$t140._sc : _$t140_sc)), s[1]._sc);
        } else {
            if ((s[1][c] instanceof Object)) s[1][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t133 instanceof Object))) ? _$t133._sc : _$t133_sc), ((((_$t140 instanceof Object))) ? _$t140._sc : _$t140_sc)));
             else {
                s[1]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t133 instanceof Object))) ? _$t133._sc : _$t133_sc), ((((_$t140 instanceof Object))) ? _$t140._sc : _$t140_sc)));
                s[1]._sc = ((((s[1]["c_sc"] >= s[1]._sc))) ? s[1]["c_sc"] : s[1]._sc);
            }
        
        };
        _$t145 = a[1];
        if (((_$t145 instanceof Object) && (_$t145 !== null))) {
            _$t145._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
        } else {
            if ((_$t145 !== null)) {
                var _$t145_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
            }
        };
        _$t144 = a[0];
        if (((_$t144 instanceof Object) && (_$t144 !== null))) {
            _$t144._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
        } else {
            if ((_$t144 !== null)) {
                var _$t144_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
            }
        };
        _$t146 = b[2];
        if (((_$t146 instanceof Object) && (_$t146 !== null))) {
            _$t146._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["2"] instanceof Object))) ? b["2"]._sc : b["2_sc"])));
        } else {
            if ((_$t146 !== null)) {
                var _$t146_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["2"] instanceof Object))) ? b["2"]._sc : b["2_sc"])));
            }
        };
        _$t143 = (_$t144 ^ _$t145);
        if (((_$t143 instanceof Object) && (_$t143 !== null))) {
            _$t143._sc = _ifc_max_(0, _ifc_max_(((((_$t144 instanceof Object))) ? _$t144._sc : _$t144_sc), ((((_$t145 instanceof Object))) ? _$t145._sc : _$t145_sc)));
        } else {
            if ((_$t143 !== null)) {
                var _$t143_sc = _ifc_max_(0, _ifc_max_(((((_$t144 instanceof Object))) ? _$t144._sc : _$t144_sc), ((((_$t145 instanceof Object))) ? _$t145._sc : _$t145_sc)));
            }
        };
        _$t147 = a[3];
        if (((_$t147 instanceof Object) && (_$t147 !== null))) {
            _$t147._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
        } else {
            if ((_$t147 !== null)) {
                var _$t147_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["3"] instanceof Object))) ? a["3"]._sc : a["3_sc"])));
            }
        };
        _$t142 = (_$t143 ^ _$t146);
        if (((_$t142 instanceof Object) && (_$t142 !== null))) {
            _$t142._sc = _ifc_max_(0, _ifc_max_(((((_$t143 instanceof Object))) ? _$t143._sc : _$t143_sc), ((((_$t146 instanceof Object))) ? _$t146._sc : _$t146_sc)));
        } else {
            if ((_$t142 !== null)) {
                var _$t142_sc = _ifc_max_(0, _ifc_max_(((((_$t143 instanceof Object))) ? _$t143._sc : _$t143_sc), ((((_$t146 instanceof Object))) ? _$t146._sc : _$t146_sc)));
            }
        };
        _$t148 = b[3];
        if (((_$t148 instanceof Object) && (_$t148 !== null))) {
            _$t148._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["3"] instanceof Object))) ? b["3"]._sc : b["3_sc"])));
        } else {
            if ((_$t148 !== null)) {
                var _$t148_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["3"] instanceof Object))) ? b["3"]._sc : b["3_sc"])));
            }
        };
        _$t141 = (_$t142 ^ _$t147);
        if (((_$t141 instanceof Object) && (_$t141 !== null))) {
            _$t141._sc = _ifc_max_(0, _ifc_max_(((((_$t142 instanceof Object))) ? _$t142._sc : _$t142_sc), ((((_$t147 instanceof Object))) ? _$t147._sc : _$t147_sc)));
        } else {
            if ((_$t141 !== null)) {
                var _$t141_sc = _ifc_max_(0, _ifc_max_(((((_$t142 instanceof Object))) ? _$t142._sc : _$t142_sc), ((((_$t147 instanceof Object))) ? _$t147._sc : _$t147_sc)));
            }
        };
        s[2][c] = (_$t141 ^ _$t148);
        if ((s[2] instanceof Array)) {
            s[2]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t141 instanceof Object))) ? _$t141._sc : _$t141_sc), ((((_$t148 instanceof Object))) ? _$t148._sc : _$t148_sc)), s[2]._sc);
        } else {
            if ((s[2][c] instanceof Object)) s[2][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t141 instanceof Object))) ? _$t141._sc : _$t141_sc), ((((_$t148 instanceof Object))) ? _$t148._sc : _$t148_sc)));
             else {
                s[2]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t141 instanceof Object))) ? _$t141._sc : _$t141_sc), ((((_$t148 instanceof Object))) ? _$t148._sc : _$t148_sc)));
                s[2]._sc = ((((s[2]["c_sc"] >= s[2]._sc))) ? s[2]["c_sc"] : s[2]._sc);
            }
        
        };
        _$t153 = b[0];
        if (((_$t153 instanceof Object) && (_$t153 !== null))) {
            _$t153._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["0"] instanceof Object))) ? b["0"]._sc : b["0_sc"])));
        } else {
            if ((_$t153 !== null)) {
                var _$t153_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["0"] instanceof Object))) ? b["0"]._sc : b["0_sc"])));
            }
        };
        _$t152 = a[0];
        if (((_$t152 instanceof Object) && (_$t152 !== null))) {
            _$t152._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
        } else {
            if ((_$t152 !== null)) {
                var _$t152_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["0"] instanceof Object))) ? a["0"]._sc : a["0_sc"])));
            }
        };
        _$t154 = a[1];
        if (((_$t154 instanceof Object) && (_$t154 !== null))) {
            _$t154._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
        } else {
            if ((_$t154 !== null)) {
                var _$t154_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["1"] instanceof Object))) ? a["1"]._sc : a["1_sc"])));
            }
        };
        _$t151 = (_$t152 ^ _$t153);
        if (((_$t151 instanceof Object) && (_$t151 !== null))) {
            _$t151._sc = _ifc_max_(0, _ifc_max_(((((_$t152 instanceof Object))) ? _$t152._sc : _$t152_sc), ((((_$t153 instanceof Object))) ? _$t153._sc : _$t153_sc)));
        } else {
            if ((_$t151 !== null)) {
                var _$t151_sc = _ifc_max_(0, _ifc_max_(((((_$t152 instanceof Object))) ? _$t152._sc : _$t152_sc), ((((_$t153 instanceof Object))) ? _$t153._sc : _$t153_sc)));
            }
        };
        _$t155 = a[2];
        if (((_$t155 instanceof Object) && (_$t155 !== null))) {
            _$t155._sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
        } else {
            if ((_$t155 !== null)) {
                var _$t155_sc = _ifc_max_(0, ((((a instanceof Array))) ? a._sc : ((((a["2"] instanceof Object))) ? a["2"]._sc : a["2_sc"])));
            }
        };
        _$t150 = (_$t151 ^ _$t154);
        if (((_$t150 instanceof Object) && (_$t150 !== null))) {
            _$t150._sc = _ifc_max_(0, _ifc_max_(((((_$t151 instanceof Object))) ? _$t151._sc : _$t151_sc), ((((_$t154 instanceof Object))) ? _$t154._sc : _$t154_sc)));
        } else {
            if ((_$t150 !== null)) {
                var _$t150_sc = _ifc_max_(0, _ifc_max_(((((_$t151 instanceof Object))) ? _$t151._sc : _$t151_sc), ((((_$t154 instanceof Object))) ? _$t154._sc : _$t154_sc)));
            }
        };
        _$t156 = b[3];
        if (((_$t156 instanceof Object) && (_$t156 !== null))) {
            _$t156._sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["3"] instanceof Object))) ? b["3"]._sc : b["3_sc"])));
        } else {
            if ((_$t156 !== null)) {
                var _$t156_sc = _ifc_max_(0, ((((b instanceof Array))) ? b._sc : ((((b["3"] instanceof Object))) ? b["3"]._sc : b["3_sc"])));
            }
        };
        _$t149 = (_$t150 ^ _$t155);
        if (((_$t149 instanceof Object) && (_$t149 !== null))) {
            _$t149._sc = _ifc_max_(0, _ifc_max_(((((_$t150 instanceof Object))) ? _$t150._sc : _$t150_sc), ((((_$t155 instanceof Object))) ? _$t155._sc : _$t155_sc)));
        } else {
            if ((_$t149 !== null)) {
                var _$t149_sc = _ifc_max_(0, _ifc_max_(((((_$t150 instanceof Object))) ? _$t150._sc : _$t150_sc), ((((_$t155 instanceof Object))) ? _$t155._sc : _$t155_sc)));
            }
        };
        s[3][c] = (_$t149 ^ _$t156);
        if ((s[3] instanceof Array)) {
            s[3]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t149 instanceof Object))) ? _$t149._sc : _$t149_sc), ((((_$t156 instanceof Object))) ? _$t156._sc : _$t156_sc)), s[3]._sc);
        } else {
            if ((s[3][c] instanceof Object)) s[3][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t149 instanceof Object))) ? _$t149._sc : _$t149_sc), ((((_$t156 instanceof Object))) ? _$t156._sc : _$t156_sc)));
             else {
                s[3]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), 0, _ifc_max_(((((_$t149 instanceof Object))) ? _$t149._sc : _$t149_sc), ((((_$t156 instanceof Object))) ? _$t156._sc : _$t156_sc)));
                s[3]._sc = ((((s[3]["c_sc"] >= s[3]._sc))) ? s[3]["c_sc"] : s[3]._sc);
            }
        
        };
        _$t157 = c++;
        if (((_$t157 instanceof Object) && (_$t157 !== null))) {
            _$t157._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
        } else {
            if ((_$t157 !== null)) {
                var _$t157_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            }
        };
        _$t111 = (c < 4);
        if (((_$t111 instanceof Object) && (_$t111 !== null))) {
            _$t111._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t111 !== null)) {
                _$t111_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    _$t158 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t158); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return s;
};
Aes["mixColumns"]._sc = 0;
Aes.addRoundKey = function(state, w, rnd, Nb) {
    var r = 0;
    if (((r instanceof Object) && (r !== null))) {
        r._sc = _ifc_max_(0, 0);
    } else {
        if ((r !== null)) {
            var r_sc = _ifc_max_(0, 0);
        }
    };
    ((((r instanceof Object))) ? r._sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)) : r_sc = _ifc_max_(_$pc(0), ((((r instanceof Object))) ? r._sc : r_sc)));
    _$t159 = (r < 4);
    if (((_$t159 instanceof Object) && (_$t159 !== null))) {
        _$t159._sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
    } else {
        if ((_$t159 !== null)) {
            var _$t159_sc = _ifc_max_(0, _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t159 instanceof Object))) ? _$t159._sc : _$t159_sc)));
    for (; _$t159; ) {
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t161 = (c < Nb);
        if (((_$t161 instanceof Object) && (_$t161 !== null))) {
            _$t161._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((3 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 3)] : 0)));
        } else {
            if ((_$t161 !== null)) {
                var _$t161_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((3 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 1)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 1)]) - 1) + 3)] : 0)));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t161 instanceof Object))) ? _$t161._sc : _$t161_sc)));
        for (; _$t161; ) {
            _$t164 = (rnd * 4);
            if (((_$t164 instanceof Object) && (_$t164 !== null))) {
                _$t164._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 2)] : 0), 0));
            } else {
                if ((_$t164 !== null)) {
                    var _$t164_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 2)] : 0), 0));
                }
            };
            _$t163 = (_$t164 + c);
            if (((_$t163 instanceof Object) && (_$t163 !== null))) {
                _$t163._sc = _ifc_max_(0, _ifc_max_(((((_$t164 instanceof Object))) ? _$t164._sc : _$t164_sc), ((((c instanceof Object))) ? c._sc : c_sc)));
            } else {
                if ((_$t163 !== null)) {
                    var _$t163_sc = _ifc_max_(0, _ifc_max_(((((_$t164 instanceof Object))) ? _$t164._sc : _$t164_sc), ((((c instanceof Object))) ? c._sc : c_sc)));
                }
            };
            state[r][c] ^= w[_$t163][r];
            if ((state[r] instanceof Array)) {
                state[r]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((w[_$t163] instanceof Array))) ? w[_$t163]._sc : ((((w[_$t163][r] instanceof Object))) ? w[_$t163][r]._sc : w[_$t163]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 5026,\u000a    lineno: 148,\u000a    parentType: 49,\u000a    start: 5025,\u000a    tokenizer: [object Object],\u000a    value: r\u000a}_sc"])), state[r]._sc);
            } else {
                if ((state[r][c] instanceof Object)) state[r][c]._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((w[_$t163] instanceof Array))) ? w[_$t163]._sc : ((((w[_$t163][r] instanceof Object))) ? w[_$t163][r]._sc : w[_$t163]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 5026,\u000a    lineno: 148,\u000a    parentType: 49,\u000a    start: 5025,\u000a    tokenizer: [object Object],\u000a    value: r\u000a}_sc"])));
                 else {
                    state[r]["c_sc"] = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc), ((((r instanceof Object))) ? r._sc : r_sc), ((((w[_$t163] instanceof Array))) ? w[_$t163]._sc : ((((w[_$t163][r] instanceof Object))) ? w[_$t163][r]._sc : w[_$t163]["{\u000a    type: IDENTIFIER,\u000a    children: ,\u000a    end: 5026,\u000a    lineno: 148,\u000a    parentType: 49,\u000a    start: 5025,\u000a    tokenizer: [object Object],\u000a    value: r\u000a}_sc"])));
                    state[r]._sc = ((((state[r]["c_sc"] >= state[r]._sc))) ? state[r]["c_sc"] : state[r]._sc);
                }
            
            };
            _$t165 = c++;
            if (((_$t165 instanceof Object) && (_$t165 !== null))) {
                _$t165._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t165 !== null)) {
                    var _$t165_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t161 = (c < Nb);
            if (((_$t161 instanceof Object) && (_$t161 !== null))) {
                _$t161._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((3 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 3)] : 0)));
            } else {
                if ((_$t161 !== null)) {
                    _$t161_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), (((((3 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 2)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 2)]) - 2) + 3)] : 0)));
                }
            };
        };
        _ifc_stack_.pop();
        _$t166 = r++;
        if (((_$t166 instanceof Object) && (_$t166 !== null))) {
            _$t166._sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
        } else {
            if ((_$t166 !== null)) {
                var _$t166_sc = _ifc_max_(0, ((((r instanceof Object))) ? r._sc : r_sc));
            }
        };
        _$t159 = (r < 4);
        if (((_$t159 instanceof Object) && (_$t159 !== null))) {
            _$t159._sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
        } else {
            if ((_$t159 !== null)) {
                _$t159_sc = _ifc_max_(_$pc(0), _ifc_max_(((((r instanceof Object))) ? r._sc : r_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    _$t167 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t167); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return state;
};
Aes["addRoundKey"]._sc = 0;
Aes.subWord = function(w) {
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t168 = (i < 4);
    if (((_$t168 instanceof Object) && (_$t168 !== null))) {
        _$t168._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t168 !== null)) {
            var _$t168_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t168 instanceof Object))) ? _$t168._sc : _$t168_sc)));
    for (; _$t168; ) {
        _$t170 = w[i];
        if (((_$t170 instanceof Object) && (_$t170 !== null))) {
            _$t170._sc = _ifc_max_(0, ((((w instanceof Array))) ? w._sc : ((((w["i"] instanceof Object))) ? w["i"]._sc : w["i_sc"])));
        } else {
            if ((_$t170 !== null)) {
                var _$t170_sc = _ifc_max_(0, ((((w instanceof Array))) ? w._sc : ((((w["i"] instanceof Object))) ? w["i"]._sc : w["i_sc"])));
            }
        };
        w[i] = Aes.sBox[_$t170];
        if ((w instanceof Array)) {
            w._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t170] instanceof Object))) ? Aes["sBox"][_$t170]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t170\u000a}_sc"])), w._sc);
        } else {
            if ((w[i] instanceof Object)) w[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t170] instanceof Object))) ? Aes["sBox"][_$t170]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t170\u000a}_sc"])));
             else {
                w["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((Aes["sBox"] instanceof Array))) ? Aes["sBox"]._sc : ((((Aes["sBox"][_$t170] instanceof Object))) ? Aes["sBox"][_$t170]._sc : Aes["sBox"]["{\u000a    type: IDENTIFIER,\u000a    assignOp: null,\u000a    children: ,\u000a    end: 6,\u000a    lineno: 1,\u000a    parentType: 49,\u000a    start: 0,\u000a    tokenizer: [object Object],\u000a    value: _$t170\u000a}_sc"])));
                w._sc = ((((w["i_sc"] >= w._sc))) ? w["i_sc"] : w._sc);
            }
        
        };
        _$t171 = i++;
        if (((_$t171 instanceof Object) && (_$t171 !== null))) {
            _$t171._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t171 !== null)) {
                var _$t171_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t168 = (i < 4);
        if (((_$t168 instanceof Object) && (_$t168 !== null))) {
            _$t168._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t168 !== null)) {
                _$t168_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    _$t172 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t172); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return w;
};
Aes["subWord"]._sc = 0;
Aes.rotWord = function(w) {
    var tmp = w[0];
    if (((tmp instanceof Object) && (tmp !== null))) {
        tmp._sc = _ifc_max_(0, ((((w instanceof Array))) ? w._sc : ((((w["0"] instanceof Object))) ? w["0"]._sc : w["0_sc"])));
    } else {
        if ((tmp !== null)) {
            var tmp_sc = _ifc_max_(0, ((((w instanceof Array))) ? w._sc : ((((w["0"] instanceof Object))) ? w["0"]._sc : w["0_sc"])));
        }
    };
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t173 = (i < 3);
    if (((_$t173 instanceof Object) && (_$t173 !== null))) {
        _$t173._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t173 !== null)) {
            var _$t173_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t173 instanceof Object))) ? _$t173._sc : _$t173_sc)));
    for (; _$t173; ) {
        _$t175 = (i + 1);
        if (((_$t175 instanceof Object) && (_$t175 !== null))) {
            _$t175._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t175 !== null)) {
                var _$t175_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        w[i] = w[_$t175];
        if ((w instanceof Array)) {
            w._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((w instanceof Array))) ? w._sc : ((((w["_$t175"] instanceof Object))) ? w["_$t175"]._sc : w["_$t175_sc"])), w._sc);
        } else {
            if ((w[i] instanceof Object)) w[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((w instanceof Array))) ? w._sc : ((((w["_$t175"] instanceof Object))) ? w["_$t175"]._sc : w["_$t175_sc"])));
             else {
                w["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((w instanceof Array))) ? w._sc : ((((w["_$t175"] instanceof Object))) ? w["_$t175"]._sc : w["_$t175_sc"])));
                w._sc = ((((w["i_sc"] >= w._sc))) ? w["i_sc"] : w._sc);
            }
        
        };
        _$t176 = i++;
        if (((_$t176 instanceof Object) && (_$t176 !== null))) {
            _$t176._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t176 !== null)) {
                var _$t176_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t173 = (i < 3);
        if (((_$t173 instanceof Object) && (_$t173 !== null))) {
            _$t173._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t173 !== null)) {
                _$t173_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    w[3] = tmp;
    if ((w instanceof Array)) {
        w._sc = _ifc_max_(_$pc(0), 0, ((((tmp instanceof Object))) ? tmp._sc : tmp_sc), w._sc);
    } else {
        if ((w[3] instanceof Object)) w[3]._sc = _ifc_max_(_$pc(0), 0, ((((tmp instanceof Object))) ? tmp._sc : tmp_sc));
         else {
            w["3_sc"] = _ifc_max_(_$pc(0), 0, ((((tmp instanceof Object))) ? tmp._sc : tmp_sc));
            w._sc = ((((w["3_sc"] >= w._sc))) ? w["3_sc"] : w._sc);
        }
    
    };
    _$t177 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t177); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return w;
};
Aes["rotWord"]._sc = 0;
Aes.sBox = [99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22,];
Aes["sBox"]._sc = _ifc_max_(_$pc(0), _ifc_max_(0, undefined));
_$t178 = [0,0,0,0,];
_$t179 = [1,0,0,0,];
_$t180 = [2,0,0,0,];
_$t181 = [4,0,0,0,];
_$t182 = [8,0,0,0,];
_$t183 = [16,0,0,0,];
_$t184 = [32,0,0,0,];
_$t185 = [64,0,0,0,];
_$t186 = [128,0,0,0,];
_$t187 = [27,0,0,0,];
_$t188 = [54,0,0,0,];
_$t188._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t187._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t186._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t185._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t184._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t183._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t182._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t181._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t180._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t179._sc = _ifc_max_(0, _ifc_max_(0, undefined));
_$t178._sc = _ifc_max_(0, _ifc_max_(0, undefined));
Aes.rCon = [_$t178,_$t179,_$t180,_$t181,_$t182,_$t183,_$t184,_$t185,_$t186,_$t187,_$t188,];
Aes["rCon"]._sc = _ifc_max_(_$pc(0), _ifc_max_(0, 0, ((((_$t178 instanceof Object))) ? _$t178._sc : _$t178_sc), ((((_$t179 instanceof Object))) ? _$t179._sc : _$t179_sc), ((((_$t180 instanceof Object))) ? _$t180._sc : _$t180_sc), ((((_$t181 instanceof Object))) ? _$t181._sc : _$t181_sc), ((((_$t182 instanceof Object))) ? _$t182._sc : _$t182_sc), ((((_$t183 instanceof Object))) ? _$t183._sc : _$t183_sc), ((((_$t184 instanceof Object))) ? _$t184._sc : _$t184_sc), ((((_$t185 instanceof Object))) ? _$t185._sc : _$t185_sc), ((((_$t186 instanceof Object))) ? _$t186._sc : _$t186_sc), ((((_$t187 instanceof Object))) ? _$t187._sc : _$t187_sc), ((((_$t188 instanceof Object))) ? _$t188._sc : _$t188_sc)));
Aes.Ctr = {
};
Aes["Ctr"]._sc = _ifc_max_(_$pc(0), _ifc_max_(0));
Aes.Ctr.encrypt = function(plaintext, password, nBits) {
    var blockSize = 16;
    if (((blockSize instanceof Object) && (blockSize !== null))) {
        blockSize._sc = _ifc_max_(0, 0);
    } else {
        if ((blockSize !== null)) {
            var blockSize_sc = _ifc_max_(0, 0);
        }
    };
    _$t193 = (nBits == 192);
    if (((_$t193 instanceof Object) && (_$t193 !== null))) {
        _$t193._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t193 !== null)) {
            var _$t193_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t192 = (nBits == 128);
    if (((_$t192 instanceof Object) && (_$t192 !== null))) {
        _$t192._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t192 !== null)) {
            var _$t192_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t194 = (nBits == 256);
    if (((_$t194 instanceof Object) && (_$t194 !== null))) {
        _$t194._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t194 !== null)) {
            var _$t194_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t191 = (_$t192 || _$t193);
    if (((_$t191 instanceof Object) && (_$t191 !== null))) {
        _$t191._sc = _ifc_max_(0, _ifc_max_(((((_$t192 instanceof Object))) ? _$t192._sc : _$t192_sc), ((((_$t193 instanceof Object))) ? _$t193._sc : _$t193_sc)));
    } else {
        if ((_$t191 !== null)) {
            var _$t191_sc = _ifc_max_(0, _ifc_max_(((((_$t192 instanceof Object))) ? _$t192._sc : _$t192_sc), ((((_$t193 instanceof Object))) ? _$t193._sc : _$t193_sc)));
        }
    };
    _$t190 = (((_$t191 || _$t194)));
    if (((_$t190 instanceof Object) && (_$t190 !== null))) {
        _$t190._sc = _ifc_max_(0, _ifc_max_(((((_$t191 instanceof Object))) ? _$t191._sc : _$t191_sc), ((((_$t194 instanceof Object))) ? _$t194._sc : _$t194_sc)));
    } else {
        if ((_$t190 !== null)) {
            var _$t190_sc = _ifc_max_(0, _ifc_max_(((((_$t191 instanceof Object))) ? _$t191._sc : _$t191_sc), ((((_$t194 instanceof Object))) ? _$t194._sc : _$t194_sc)));
        }
    };
    _$t189 = !_$t190;
    if (((_$t189 instanceof Object) && (_$t189 !== null))) {
        _$t189._sc = _ifc_max_(0, ((((_$t190 instanceof Object))) ? _$t190._sc : _$t190_sc));
    } else {
        if ((_$t189 !== null)) {
            var _$t189_sc = _ifc_max_(0, ((((_$t190 instanceof Object))) ? _$t190._sc : _$t190_sc));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t189 instanceof Object))) ? _$t189._sc : _$t189_sc)));
    if (_$t189) {
        _$t195 = (_$pc(-1) + 1);
        var old_pc = _ifc_max_(_$pc(0), 0);
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t195); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return "";
    }
;
    _ifc_stack_.pop();
    if ((((String && (String._sc !== undefined))))) {
        _$t197 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
        _ifc_stack_.push((((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t197);
        var _$t196 = String(plaintext);
        if ((_$t196 instanceof Object)) {
            _$t196._sc = _ifc_stack_.pop();
        } else {
            var _$t196_sc = _ifc_stack_.pop();
        };
    }
     else if (String) {
        var _$t196 = String(plaintext);
        if (((_$t196 instanceof Object) && (_$t196 !== null))) {
            _$t196._sc = _ifc_max_(0, _ifc_max_(0, (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0)));
        } else {
            if ((_$t196 !== null)) {
                var _$t196_sc = _ifc_max_(0, _ifc_max_(0, (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0)));
            }
        };
    }
    
;
    if (((((_$t196["utf8Encode"] && (_$t196["utf8Encode"]._sc !== undefined)))) || ((((_$t196._sc !== undefined) && (((("call" === "utf8Encode") || ("apply" === "utf8Encode"))))))))) {
        _$t198 = ((((_$pc(0) <= _$t196._sc))) ? _$t196._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t198);
        plaintext = _$t196["utf8Encode"]();
        if ((plaintext instanceof Object)) {
            plaintext._sc = _ifc_stack_.pop();
        } else {
            plaintext_sc = _ifc_stack_.pop();
        };
    }
     else if (_$t196["utf8Encode"]) {
        plaintext = _$t196["utf8Encode"]();
        if (((plaintext instanceof Object) && (plaintext !== null))) {
            plaintext._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((plaintext !== null)) {
                plaintext_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    if ((((String && (String._sc !== undefined))))) {
        _$t200 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
        _ifc_stack_.push((((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t200);
        var _$t199 = String(password);
        if ((_$t199 instanceof Object)) {
            _$t199._sc = _ifc_stack_.pop();
        } else {
            var _$t199_sc = _ifc_stack_.pop();
        };
    }
     else if (String) {
        var _$t199 = String(password);
        if (((_$t199 instanceof Object) && (_$t199 !== null))) {
            _$t199._sc = _ifc_max_(0, _ifc_max_(0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0)));
        } else {
            if ((_$t199 !== null)) {
                var _$t199_sc = _ifc_max_(0, _ifc_max_(0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0)));
            }
        };
    }
    
;
    if (((((_$t199["utf8Encode"] && (_$t199["utf8Encode"]._sc !== undefined)))) || ((((_$t199._sc !== undefined) && (((("call" === "utf8Encode") || ("apply" === "utf8Encode"))))))))) {
        _$t201 = ((((_$pc(0) <= _$t199._sc))) ? _$t199._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t201);
        password = _$t199["utf8Encode"]();
        if ((password instanceof Object)) {
            password._sc = _ifc_stack_.pop();
        } else {
            password_sc = _ifc_stack_.pop();
        };
    }
     else if (_$t199["utf8Encode"]) {
        password = _$t199["utf8Encode"]();
        if (((password instanceof Object) && (password !== null))) {
            password._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((password !== null)) {
                password_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    var nBytes = (nBits / 8);
    if (((nBytes instanceof Object) && (nBytes !== null))) {
        nBytes._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((nBytes !== null)) {
            var nBytes_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    if ((((Array && (Array._sc !== undefined))))) {
        _$t202 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t202);
        var pwBytes = new Array(nBytes);
        if ((pwBytes instanceof Object)) {
            pwBytes._sc = _ifc_stack_.pop();
        } else {
            var pwBytes_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var pwBytes = new Array(nBytes);
        if (((pwBytes instanceof Object) && (pwBytes !== null))) {
            pwBytes._sc = _ifc_max_(0, _ifc_max_(0, ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        } else {
            if ((pwBytes !== null)) {
                var pwBytes_sc = _ifc_max_(0, _ifc_max_(0, ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
            }
        };
    }
    
;
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t203 = (i < nBytes);
    if (((_$t203 instanceof Object) && (_$t203 !== null))) {
        _$t203._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
    } else {
        if ((_$t203 !== null)) {
            var _$t203_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t203 instanceof Object))) ? _$t203._sc : _$t203_sc)));
    for (; _$t203; ) {
        if (((((password["charCodeAt"] && (password["charCodeAt"]._sc !== undefined)))) || ((((password._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
            _$t207 = ((((_$pc(0) <= password._sc))) ? password._sc : _$pc(0));
            _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t207);
            var _$t206 = password["charCodeAt"](i);
            if ((_$t206 instanceof Object)) {
                _$t206._sc = _ifc_stack_.pop();
            } else {
                var _$t206_sc = _ifc_stack_.pop();
            };
        }
         else if (password["charCodeAt"]) {
            var _$t206 = password["charCodeAt"](i);
            if (((_$t206 instanceof Object) && (_$t206 !== null))) {
                _$t206._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            } else {
                if ((_$t206 !== null)) {
                    var _$t206_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                }
            };
        }
        
    ;
        if (((((password["charCodeAt"] && (password["charCodeAt"]._sc !== undefined)))) || ((((password._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
            _$t210 = ((((_$pc(0) <= password._sc))) ? password._sc : _$pc(0));
            _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t210);
            var _$t209 = password["charCodeAt"](i);
            if ((_$t209 instanceof Object)) {
                _$t209._sc = _ifc_stack_.pop();
            } else {
                var _$t209_sc = _ifc_stack_.pop();
            };
        }
         else if (password["charCodeAt"]) {
            var _$t209 = password["charCodeAt"](i);
            if (((_$t209 instanceof Object) && (_$t209 !== null))) {
                _$t209._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            } else {
                if ((_$t209 !== null)) {
                    var _$t209_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                }
            };
        }
        
    ;
        if ((((isNaN && (isNaN._sc !== undefined))))) {
            _$t208 = ((((_$pc(0) <= isNaN._sc))) ? isNaN._sc : _$pc(0));
            _ifc_stack_.push(((((_$t206 instanceof Object))) ? _$t206._sc : _$t206_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t208);
            var _$t205 = isNaN(_$t206);
            if ((_$t205 instanceof Object)) {
                _$t205._sc = _ifc_stack_.pop();
            } else {
                var _$t205_sc = _ifc_stack_.pop();
            };
        }
         else if (isNaN) {
            var _$t205 = isNaN(_$t206);
            if (((_$t205 instanceof Object) && (_$t205 !== null))) {
                _$t205._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t206 instanceof Object))) ? _$t206._sc : _$t206_sc)));
            } else {
                if ((_$t205 !== null)) {
                    var _$t205_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t206 instanceof Object))) ? _$t206._sc : _$t206_sc)));
                }
            };
        }
        
    ;
        pwBytes[i] = (_$t205 ? 0 : _$t209);
        if ((pwBytes instanceof Array)) {
            pwBytes._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t205 instanceof Object))) ? _$t205._sc : _$t205_sc), 0, ((((_$t209 instanceof Object))) ? _$t209._sc : _$t209_sc)), pwBytes._sc);
        } else {
            if ((pwBytes[i] instanceof Object)) pwBytes[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t205 instanceof Object))) ? _$t205._sc : _$t205_sc), 0, ((((_$t209 instanceof Object))) ? _$t209._sc : _$t209_sc)));
             else {
                pwBytes["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t205 instanceof Object))) ? _$t205._sc : _$t205_sc), 0, ((((_$t209 instanceof Object))) ? _$t209._sc : _$t209_sc)));
                pwBytes._sc = ((((pwBytes["i_sc"] >= pwBytes._sc))) ? pwBytes["i_sc"] : pwBytes._sc);
            }
        
        };
        _$t211 = i++;
        if (((_$t211 instanceof Object) && (_$t211 !== null))) {
            _$t211._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t211 !== null)) {
                var _$t211_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t203 = (i < nBytes);
        if (((_$t203 instanceof Object) && (_$t203 !== null))) {
            _$t203._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        } else {
            if ((_$t203 !== null)) {
                _$t203_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["keyExpansion"] && (Aes["keyExpansion"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "keyExpansion") || ("apply" === "keyExpansion"))))))))) {
        _$t213 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t213);
        var _$t212 = Aes["keyExpansion"](pwBytes);
        if ((_$t212 instanceof Object)) {
            _$t212._sc = _ifc_stack_.pop();
        } else {
            var _$t212_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["keyExpansion"]) {
        var _$t212 = Aes["keyExpansion"](pwBytes);
        if (((_$t212 instanceof Object) && (_$t212 !== null))) {
            _$t212._sc = _ifc_max_(0, _ifc_max_(0, ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
        } else {
            if ((_$t212 !== null)) {
                var _$t212_sc = _ifc_max_(0, _ifc_max_(0, ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
            }
        };
    }
    
;
    if (((((Aes["cipher"] && (Aes["cipher"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "cipher") || ("apply" === "cipher"))))))))) {
        _$t214 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc));
        _ifc_stack_.push(((((_$t212 instanceof Object))) ? _$t212._sc : _$t212_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t214);
        var key = Aes["cipher"](pwBytes, _$t212);
        if ((key instanceof Object)) {
            key._sc = _ifc_stack_.pop();
        } else {
            var key_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["cipher"]) {
        var key = Aes["cipher"](pwBytes, _$t212);
        if (((key instanceof Object) && (key !== null))) {
            key._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t212 instanceof Object))) ? _$t212._sc : _$t212_sc), ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
        } else {
            if ((key !== null)) {
                var key_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t212 instanceof Object))) ? _$t212._sc : _$t212_sc), ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
            }
        };
    }
    
;
    _$t216 = (nBytes - 16);
    if (((_$t216 instanceof Object) && (_$t216 !== null))) {
        _$t216._sc = _ifc_max_(0, _ifc_max_(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc), 0));
    } else {
        if ((_$t216 !== null)) {
            var _$t216_sc = _ifc_max_(0, _ifc_max_(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc), 0));
        }
    };
    if (((((key["slice"] && (key["slice"]._sc !== undefined)))) || ((((key._sc !== undefined) && (((("call" === "slice") || ("apply" === "slice"))))))))) {
        _$t217 = ((((_$pc(0) <= key._sc))) ? key._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(((((_$t216 instanceof Object))) ? _$t216._sc : _$t216_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t217);
        var _$t215 = key["slice"](0, _$t216);
        if ((_$t215 instanceof Object)) {
            _$t215._sc = _ifc_stack_.pop();
        } else {
            var _$t215_sc = _ifc_stack_.pop();
        };
    }
     else if (key["slice"]) {
        var _$t215 = key["slice"](0, _$t216);
        if (((_$t215 instanceof Object) && (_$t215 !== null))) {
            _$t215._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t216 instanceof Object))) ? _$t216._sc : _$t216_sc), 0));
        } else {
            if ((_$t215 !== null)) {
                var _$t215_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t216 instanceof Object))) ? _$t216._sc : _$t216_sc), 0));
            }
        };
    }
    
;
    if (((((key["concat"] && (key["concat"]._sc !== undefined)))) || ((((key._sc !== undefined) && (((("call" === "concat") || ("apply" === "concat"))))))))) {
        _$t218 = ((((_$pc(0) <= key._sc))) ? key._sc : _$pc(0));
        _ifc_stack_.push(((((_$t215 instanceof Object))) ? _$t215._sc : _$t215_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t218);
        key = key["concat"](_$t215);
        if ((key instanceof Object)) {
            key._sc = _ifc_stack_.pop();
        } else {
            key_sc = _ifc_stack_.pop();
        };
    }
     else if (key["concat"]) {
        key = key["concat"](_$t215);
        if (((key instanceof Object) && (key !== null))) {
            key._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t215 instanceof Object))) ? _$t215._sc : _$t215_sc)));
        } else {
            if ((key !== null)) {
                key_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t215 instanceof Object))) ? _$t215._sc : _$t215_sc)));
            }
        };
    }
    
;
    if ((((Array && (Array._sc !== undefined))))) {
        _$t219 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t219);
        var counterBlock = new Array(blockSize);
        if ((counterBlock instanceof Object)) {
            counterBlock._sc = _ifc_stack_.pop();
        } else {
            var counterBlock_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var counterBlock = new Array(blockSize);
        if (((counterBlock instanceof Object) && (counterBlock !== null))) {
            counterBlock._sc = _ifc_max_(0, _ifc_max_(0, ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        } else {
            if ((counterBlock !== null)) {
                var counterBlock_sc = _ifc_max_(0, _ifc_max_(0, ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            }
        };
    }
    
;
    if ((((Date && (Date._sc !== undefined))))) {
        _$t221 = ((((_$pc(0) <= Date._sc))) ? Date._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t221);
        var _$t220 = new Date();
        if ((_$t220 instanceof Object)) {
            _$t220._sc = _ifc_stack_.pop();
        } else {
            var _$t220_sc = _ifc_stack_.pop();
        };
    }
     else if (Date) {
        var _$t220 = new Date();
        if (((_$t220 instanceof Object) && (_$t220 !== null))) {
            _$t220._sc = _ifc_max_(0, _ifc_max_(0));
        } else {
            if ((_$t220 !== null)) {
                var _$t220_sc = _ifc_max_(0, _ifc_max_(0));
            }
        };
    }
    
;
    if (((((_$t220["getTime"] && (_$t220["getTime"]._sc !== undefined)))) || ((((_$t220._sc !== undefined) && (((("call" === "getTime") || ("apply" === "getTime"))))))))) {
        _$t222 = ((((_$pc(0) <= _$t220._sc))) ? _$t220._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t222);
        var nonce = _$t220["getTime"]();
        if ((nonce instanceof Object)) {
            nonce._sc = _ifc_stack_.pop();
        } else {
            var nonce_sc = _ifc_stack_.pop();
        };
    }
     else if (_$t220["getTime"]) {
        var nonce = _$t220["getTime"]();
        if (((nonce instanceof Object) && (nonce !== null))) {
            nonce._sc = _ifc_max_(0, _ifc_max_(0));
        } else {
            if ((nonce !== null)) {
                var nonce_sc = _ifc_max_(0, _ifc_max_(0));
            }
        };
    }
    
;
    var nonceMs = (nonce % 1000);
    if (((nonceMs instanceof Object) && (nonceMs !== null))) {
        nonceMs._sc = _ifc_max_(0, _ifc_max_(((((nonce instanceof Object))) ? nonce._sc : nonce_sc), 0));
    } else {
        if ((nonceMs !== null)) {
            var nonceMs_sc = _ifc_max_(0, _ifc_max_(((((nonce instanceof Object))) ? nonce._sc : nonce_sc), 0));
        }
    };
    _$t223 = (nonce / 1000);
    if (((_$t223 instanceof Object) && (_$t223 !== null))) {
        _$t223._sc = _ifc_max_(0, _ifc_max_(((((nonce instanceof Object))) ? nonce._sc : nonce_sc), 0));
    } else {
        if ((_$t223 !== null)) {
            var _$t223_sc = _ifc_max_(0, _ifc_max_(((((nonce instanceof Object))) ? nonce._sc : nonce_sc), 0));
        }
    };
    if (((((Math["floor"] && (Math["floor"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "floor") || ("apply" === "floor"))))))))) {
        _$t224 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
        _ifc_stack_.push(((((_$t223 instanceof Object))) ? _$t223._sc : _$t223_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t224);
        var nonceSec = Math["floor"](_$t223);
        if ((nonceSec instanceof Object)) {
            nonceSec._sc = _ifc_stack_.pop();
        } else {
            var nonceSec_sc = _ifc_stack_.pop();
        };
    }
     else if (Math["floor"]) {
        var nonceSec = Math["floor"](_$t223);
        if (((nonceSec instanceof Object) && (nonceSec !== null))) {
            nonceSec._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t223 instanceof Object))) ? _$t223._sc : _$t223_sc)));
        } else {
            if ((nonceSec !== null)) {
                var nonceSec_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t223 instanceof Object))) ? _$t223._sc : _$t223_sc)));
            }
        };
    }
    
;
    if (((((Math["random"] && (Math["random"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "random") || ("apply" === "random"))))))))) {
        _$t227 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t227);
        var _$t226 = Math["random"]();
        if ((_$t226 instanceof Object)) {
            _$t226._sc = _ifc_stack_.pop();
        } else {
            var _$t226_sc = _ifc_stack_.pop();
        };
    }
     else if (Math["random"]) {
        var _$t226 = Math["random"]();
        if (((_$t226 instanceof Object) && (_$t226 !== null))) {
            _$t226._sc = _ifc_max_(0, _ifc_max_(0));
        } else {
            if ((_$t226 !== null)) {
                var _$t226_sc = _ifc_max_(0, _ifc_max_(0));
            }
        };
    }
    
;
    _$t225 = (_$t226 * 65535);
    if (((_$t225 instanceof Object) && (_$t225 !== null))) {
        _$t225._sc = _ifc_max_(0, _ifc_max_(((((_$t226 instanceof Object))) ? _$t226._sc : _$t226_sc), 0));
    } else {
        if ((_$t225 !== null)) {
            var _$t225_sc = _ifc_max_(0, _ifc_max_(((((_$t226 instanceof Object))) ? _$t226._sc : _$t226_sc), 0));
        }
    };
    if (((((Math["floor"] && (Math["floor"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "floor") || ("apply" === "floor"))))))))) {
        _$t228 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
        _ifc_stack_.push(((((_$t225 instanceof Object))) ? _$t225._sc : _$t225_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t228);
        var nonceRnd = Math["floor"](_$t225);
        if ((nonceRnd instanceof Object)) {
            nonceRnd._sc = _ifc_stack_.pop();
        } else {
            var nonceRnd_sc = _ifc_stack_.pop();
        };
    }
     else if (Math["floor"]) {
        var nonceRnd = Math["floor"](_$t225);
        if (((nonceRnd instanceof Object) && (nonceRnd !== null))) {
            nonceRnd._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t225 instanceof Object))) ? _$t225._sc : _$t225_sc)));
        } else {
            if ((nonceRnd !== null)) {
                var nonceRnd_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t225 instanceof Object))) ? _$t225._sc : _$t225_sc)));
            }
        };
    }
    
;
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t229 = (i < 2);
    if (((_$t229 instanceof Object) && (_$t229 !== null))) {
        _$t229._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t229 !== null)) {
            var _$t229_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t229 instanceof Object))) ? _$t229._sc : _$t229_sc)));
    for (; _$t229; ) {
        _$t232 = (i * 8);
        if (((_$t232 instanceof Object) && (_$t232 !== null))) {
            _$t232._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t232 !== null)) {
                var _$t232_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t231 = (((nonceMs >>> _$t232)));
        if (((_$t231 instanceof Object) && (_$t231 !== null))) {
            _$t231._sc = _ifc_max_(0, _ifc_max_(((((nonceMs instanceof Object))) ? nonceMs._sc : nonceMs_sc), ((((_$t232 instanceof Object))) ? _$t232._sc : _$t232_sc)));
        } else {
            if ((_$t231 !== null)) {
                var _$t231_sc = _ifc_max_(0, _ifc_max_(((((nonceMs instanceof Object))) ? nonceMs._sc : nonceMs_sc), ((((_$t232 instanceof Object))) ? _$t232._sc : _$t232_sc)));
            }
        };
        counterBlock[i] = (_$t231 & 255);
        if ((counterBlock instanceof Array)) {
            counterBlock._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t231 instanceof Object))) ? _$t231._sc : _$t231_sc), 0), counterBlock._sc);
        } else {
            if ((counterBlock[i] instanceof Object)) counterBlock[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t231 instanceof Object))) ? _$t231._sc : _$t231_sc), 0));
             else {
                counterBlock["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t231 instanceof Object))) ? _$t231._sc : _$t231_sc), 0));
                counterBlock._sc = ((((counterBlock["i_sc"] >= counterBlock._sc))) ? counterBlock["i_sc"] : counterBlock._sc);
            }
        
        };
        _$t233 = i++;
        if (((_$t233 instanceof Object) && (_$t233 !== null))) {
            _$t233._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t233 !== null)) {
                var _$t233_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t229 = (i < 2);
        if (((_$t229 instanceof Object) && (_$t229 !== null))) {
            _$t229._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t229 !== null)) {
                _$t229_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t234 = (i < 2);
    if (((_$t234 instanceof Object) && (_$t234 !== null))) {
        _$t234._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t234 !== null)) {
            var _$t234_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t234 instanceof Object))) ? _$t234._sc : _$t234_sc)));
    for (; _$t234; ) {
        _$t236 = (i + 2);
        if (((_$t236 instanceof Object) && (_$t236 !== null))) {
            _$t236._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t236 !== null)) {
                var _$t236_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t238 = (i * 8);
        if (((_$t238 instanceof Object) && (_$t238 !== null))) {
            _$t238._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t238 !== null)) {
                var _$t238_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t237 = (((nonceRnd >>> _$t238)));
        if (((_$t237 instanceof Object) && (_$t237 !== null))) {
            _$t237._sc = _ifc_max_(0, _ifc_max_(((((nonceRnd instanceof Object))) ? nonceRnd._sc : nonceRnd_sc), ((((_$t238 instanceof Object))) ? _$t238._sc : _$t238_sc)));
        } else {
            if ((_$t237 !== null)) {
                var _$t237_sc = _ifc_max_(0, _ifc_max_(((((nonceRnd instanceof Object))) ? nonceRnd._sc : nonceRnd_sc), ((((_$t238 instanceof Object))) ? _$t238._sc : _$t238_sc)));
            }
        };
        counterBlock[_$t236] = (_$t237 & 255);
        if ((counterBlock instanceof Array)) {
            counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t236 instanceof Object))) ? _$t236._sc : _$t236_sc), _ifc_max_(((((_$t237 instanceof Object))) ? _$t237._sc : _$t237_sc), 0), counterBlock._sc);
        } else {
            if ((counterBlock[_$t236] instanceof Object)) counterBlock[_$t236]._sc = _ifc_max_(_$pc(0), ((((_$t236 instanceof Object))) ? _$t236._sc : _$t236_sc), _ifc_max_(((((_$t237 instanceof Object))) ? _$t237._sc : _$t237_sc), 0));
             else {
                counterBlock["_$t236_sc"] = _ifc_max_(_$pc(0), ((((_$t236 instanceof Object))) ? _$t236._sc : _$t236_sc), _ifc_max_(((((_$t237 instanceof Object))) ? _$t237._sc : _$t237_sc), 0));
                counterBlock._sc = ((((counterBlock["_$t236_sc"] >= counterBlock._sc))) ? counterBlock["_$t236_sc"] : counterBlock._sc);
            }
        
        };
        _$t239 = i++;
        if (((_$t239 instanceof Object) && (_$t239 !== null))) {
            _$t239._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t239 !== null)) {
                var _$t239_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t234 = (i < 2);
        if (((_$t234 instanceof Object) && (_$t234 !== null))) {
            _$t234._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t234 !== null)) {
                _$t234_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t240 = (i < 4);
    if (((_$t240 instanceof Object) && (_$t240 !== null))) {
        _$t240._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t240 !== null)) {
            var _$t240_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t240 instanceof Object))) ? _$t240._sc : _$t240_sc)));
    for (; _$t240; ) {
        _$t242 = (i + 4);
        if (((_$t242 instanceof Object) && (_$t242 !== null))) {
            _$t242._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t242 !== null)) {
                var _$t242_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t244 = (i * 8);
        if (((_$t244 instanceof Object) && (_$t244 !== null))) {
            _$t244._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t244 !== null)) {
                var _$t244_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
        _$t243 = (((nonceSec >>> _$t244)));
        if (((_$t243 instanceof Object) && (_$t243 !== null))) {
            _$t243._sc = _ifc_max_(0, _ifc_max_(((((nonceSec instanceof Object))) ? nonceSec._sc : nonceSec_sc), ((((_$t244 instanceof Object))) ? _$t244._sc : _$t244_sc)));
        } else {
            if ((_$t243 !== null)) {
                var _$t243_sc = _ifc_max_(0, _ifc_max_(((((nonceSec instanceof Object))) ? nonceSec._sc : nonceSec_sc), ((((_$t244 instanceof Object))) ? _$t244._sc : _$t244_sc)));
            }
        };
        counterBlock[_$t242] = (_$t243 & 255);
        if ((counterBlock instanceof Array)) {
            counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t242 instanceof Object))) ? _$t242._sc : _$t242_sc), _ifc_max_(((((_$t243 instanceof Object))) ? _$t243._sc : _$t243_sc), 0), counterBlock._sc);
        } else {
            if ((counterBlock[_$t242] instanceof Object)) counterBlock[_$t242]._sc = _ifc_max_(_$pc(0), ((((_$t242 instanceof Object))) ? _$t242._sc : _$t242_sc), _ifc_max_(((((_$t243 instanceof Object))) ? _$t243._sc : _$t243_sc), 0));
             else {
                counterBlock["_$t242_sc"] = _ifc_max_(_$pc(0), ((((_$t242 instanceof Object))) ? _$t242._sc : _$t242_sc), _ifc_max_(((((_$t243 instanceof Object))) ? _$t243._sc : _$t243_sc), 0));
                counterBlock._sc = ((((counterBlock["_$t242_sc"] >= counterBlock._sc))) ? counterBlock["_$t242_sc"] : counterBlock._sc);
            }
        
        };
        _$t245 = i++;
        if (((_$t245 instanceof Object) && (_$t245 !== null))) {
            _$t245._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t245 !== null)) {
                var _$t245_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t240 = (i < 4);
        if (((_$t240 instanceof Object) && (_$t240 !== null))) {
            _$t240._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t240 !== null)) {
                _$t240_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    var ctrTxt = "";
    if (((ctrTxt instanceof Object) && (ctrTxt !== null))) {
        ctrTxt._sc = _ifc_max_(0, 0);
    } else {
        if ((ctrTxt !== null)) {
            var ctrTxt_sc = _ifc_max_(0, 0);
        }
    };
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t246 = (i < 8);
    if (((_$t246 instanceof Object) && (_$t246 !== null))) {
        _$t246._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t246 !== null)) {
            var _$t246_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t246 instanceof Object))) ? _$t246._sc : _$t246_sc)));
    for (; _$t246; ) {
        _$t248 = counterBlock[i];
        if (((_$t248 instanceof Object) && (_$t248 !== null))) {
            _$t248._sc = _ifc_max_(0, ((((counterBlock instanceof Array))) ? counterBlock._sc : ((((counterBlock["i"] instanceof Object))) ? counterBlock["i"]._sc : counterBlock["i_sc"])));
        } else {
            if ((_$t248 !== null)) {
                var _$t248_sc = _ifc_max_(0, ((((counterBlock instanceof Array))) ? counterBlock._sc : ((((counterBlock["i"] instanceof Object))) ? counterBlock["i"]._sc : counterBlock["i_sc"])));
            }
        };
        if (((((String["fromCharCode"] && (String["fromCharCode"]._sc !== undefined)))) || ((((String._sc !== undefined) && (((("call" === "fromCharCode") || ("apply" === "fromCharCode"))))))))) {
            _$t249 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
            _ifc_stack_.push(((((_$t248 instanceof Object))) ? _$t248._sc : _$t248_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t249);
            ctrTxt += String["fromCharCode"](_$t248);
            if ((ctrTxt instanceof Object)) {
                ctrTxt._sc = _ifc_stack_.pop();
            } else {
                ctrTxt_sc = _ifc_stack_.pop();
            };
        }
         else if (String["fromCharCode"]) {
            ctrTxt += String["fromCharCode"](_$t248);
            if (((ctrTxt instanceof Object) && (ctrTxt !== null))) {
                ctrTxt._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t248 instanceof Object))) ? _$t248._sc : _$t248_sc)));
            } else {
                if ((ctrTxt !== null)) {
                    ctrTxt_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t248 instanceof Object))) ? _$t248._sc : _$t248_sc)));
                }
            };
        }
        
    ;
        _$t250 = i++;
        if (((_$t250 instanceof Object) && (_$t250 !== null))) {
            _$t250._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t250 !== null)) {
                var _$t250_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t246 = (i < 8);
        if (((_$t246 instanceof Object) && (_$t246 !== null))) {
            _$t246._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t246 !== null)) {
                _$t246_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["keyExpansion"] && (Aes["keyExpansion"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "keyExpansion") || ("apply" === "keyExpansion"))))))))) {
        _$t251 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((key instanceof Object))) ? key._sc : key_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t251);
        var keySchedule = Aes["keyExpansion"](key);
        if ((keySchedule instanceof Object)) {
            keySchedule._sc = _ifc_stack_.pop();
        } else {
            var keySchedule_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["keyExpansion"]) {
        var keySchedule = Aes["keyExpansion"](key);
        if (((keySchedule instanceof Object) && (keySchedule !== null))) {
            keySchedule._sc = _ifc_max_(0, _ifc_max_(0, ((((key instanceof Object))) ? key._sc : key_sc)));
        } else {
            if ((keySchedule !== null)) {
                var keySchedule_sc = _ifc_max_(0, _ifc_max_(0, ((((key instanceof Object))) ? key._sc : key_sc)));
            }
        };
    }
    
;
    _$t253 = plaintext.length;
    if (((_$t253 instanceof Object) && (_$t253 !== null))) {
        _$t253._sc = _ifc_max_(0, ((((plaintext.length instanceof Object))) ? plaintext.length._sc : plaintext.length_sc));
    } else {
        if ((_$t253 !== null)) {
            var _$t253_sc = _ifc_max_(0, ((((plaintext.length instanceof Object))) ? plaintext.length._sc : plaintext.length_sc));
        }
    };
    _$t252 = (_$t253 / blockSize);
    if (((_$t252 instanceof Object) && (_$t252 !== null))) {
        _$t252._sc = _ifc_max_(0, _ifc_max_(((((_$t253 instanceof Object))) ? _$t253._sc : _$t253_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
    } else {
        if ((_$t252 !== null)) {
            var _$t252_sc = _ifc_max_(0, _ifc_max_(((((_$t253 instanceof Object))) ? _$t253._sc : _$t253_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        }
    };
    if (((((Math["ceil"] && (Math["ceil"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "ceil") || ("apply" === "ceil"))))))))) {
        _$t254 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
        _ifc_stack_.push(((((_$t252 instanceof Object))) ? _$t252._sc : _$t252_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t254);
        var blockCount = Math["ceil"](_$t252);
        if ((blockCount instanceof Object)) {
            blockCount._sc = _ifc_stack_.pop();
        } else {
            var blockCount_sc = _ifc_stack_.pop();
        };
    }
     else if (Math["ceil"]) {
        var blockCount = Math["ceil"](_$t252);
        if (((blockCount instanceof Object) && (blockCount !== null))) {
            blockCount._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t252 instanceof Object))) ? _$t252._sc : _$t252_sc)));
        } else {
            if ((blockCount !== null)) {
                var blockCount_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t252 instanceof Object))) ? _$t252._sc : _$t252_sc)));
            }
        };
    }
    
;
    if ((((Array && (Array._sc !== undefined))))) {
        _$t255 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t255);
        var ciphertxt = new Array(blockCount);
        if ((ciphertxt instanceof Object)) {
            ciphertxt._sc = _ifc_stack_.pop();
        } else {
            var ciphertxt_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var ciphertxt = new Array(blockCount);
        if (((ciphertxt instanceof Object) && (ciphertxt !== null))) {
            ciphertxt._sc = _ifc_max_(0, _ifc_max_(0, ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
        } else {
            if ((ciphertxt !== null)) {
                var ciphertxt_sc = _ifc_max_(0, _ifc_max_(0, ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
            }
        };
    }
    
;
    var b = 0;
    if (((b instanceof Object) && (b !== null))) {
        b._sc = _ifc_max_(0, 0);
    } else {
        if ((b !== null)) {
            var b_sc = _ifc_max_(0, 0);
        }
    };
    ((((b instanceof Object))) ? b._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)) : b_sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)));
    _$t256 = (b < blockCount);
    if (((_$t256 instanceof Object) && (_$t256 !== null))) {
        _$t256._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
    } else {
        if ((_$t256 !== null)) {
            var _$t256_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t256 instanceof Object))) ? _$t256._sc : _$t256_sc)));
    for (; _$t256; ) {
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t258 = (c < 4);
        if (((_$t258 instanceof Object) && (_$t258 !== null))) {
            _$t258._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t258 !== null)) {
                var _$t258_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t258 instanceof Object))) ? _$t258._sc : _$t258_sc)));
        for (; _$t258; ) {
            _$t260 = (15 - c);
            if (((_$t260 instanceof Object) && (_$t260 !== null))) {
                _$t260._sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
            } else {
                if ((_$t260 !== null)) {
                    var _$t260_sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
                }
            };
            _$t262 = (c * 8);
            if (((_$t262 instanceof Object) && (_$t262 !== null))) {
                _$t262._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t262 !== null)) {
                    var _$t262_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
            _$t261 = (((b >>> _$t262)));
            if (((_$t261 instanceof Object) && (_$t261 !== null))) {
                _$t261._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((_$t262 instanceof Object))) ? _$t262._sc : _$t262_sc)));
            } else {
                if ((_$t261 !== null)) {
                    var _$t261_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((_$t262 instanceof Object))) ? _$t262._sc : _$t262_sc)));
                }
            };
            counterBlock[_$t260] = (_$t261 & 255);
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t260 instanceof Object))) ? _$t260._sc : _$t260_sc), _ifc_max_(((((_$t261 instanceof Object))) ? _$t261._sc : _$t261_sc), 0), counterBlock._sc);
            } else {
                if ((counterBlock[_$t260] instanceof Object)) counterBlock[_$t260]._sc = _ifc_max_(_$pc(0), ((((_$t260 instanceof Object))) ? _$t260._sc : _$t260_sc), _ifc_max_(((((_$t261 instanceof Object))) ? _$t261._sc : _$t261_sc), 0));
                 else {
                    counterBlock["_$t260_sc"] = _ifc_max_(_$pc(0), ((((_$t260 instanceof Object))) ? _$t260._sc : _$t260_sc), _ifc_max_(((((_$t261 instanceof Object))) ? _$t261._sc : _$t261_sc), 0));
                    counterBlock._sc = ((((counterBlock["_$t260_sc"] >= counterBlock._sc))) ? counterBlock["_$t260_sc"] : counterBlock._sc);
                }
            
            };
            _$t263 = c++;
            if (((_$t263 instanceof Object) && (_$t263 !== null))) {
                _$t263._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t263 !== null)) {
                    var _$t263_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t258 = (c < 4);
            if (((_$t258 instanceof Object) && (_$t258 !== null))) {
                _$t258._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t258 !== null)) {
                    _$t258_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t264 = (c < 4);
        if (((_$t264 instanceof Object) && (_$t264 !== null))) {
            _$t264._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t264 !== null)) {
                var _$t264_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t264 instanceof Object))) ? _$t264._sc : _$t264_sc)));
        for (; _$t264; ) {
            _$t267 = (15 - c);
            if (((_$t267 instanceof Object) && (_$t267 !== null))) {
                _$t267._sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
            } else {
                if ((_$t267 !== null)) {
                    var _$t267_sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
                }
            };
            _$t266 = (_$t267 - 4);
            if (((_$t266 instanceof Object) && (_$t266 !== null))) {
                _$t266._sc = _ifc_max_(0, _ifc_max_(((((_$t267 instanceof Object))) ? _$t267._sc : _$t267_sc), 0));
            } else {
                if ((_$t266 !== null)) {
                    var _$t266_sc = _ifc_max_(0, _ifc_max_(((((_$t267 instanceof Object))) ? _$t267._sc : _$t267_sc), 0));
                }
            };
            _$t269 = (c * 8);
            if (((_$t269 instanceof Object) && (_$t269 !== null))) {
                _$t269._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t269 !== null)) {
                    var _$t269_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
            _$t268 = (b / 4294967296);
            if (((_$t268 instanceof Object) && (_$t268 !== null))) {
                _$t268._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), 0));
            } else {
                if ((_$t268 !== null)) {
                    var _$t268_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), 0));
                }
            };
            counterBlock[_$t266] = (((_$t268 >>> _$t269)));
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t266 instanceof Object))) ? _$t266._sc : _$t266_sc), _ifc_max_(((((_$t268 instanceof Object))) ? _$t268._sc : _$t268_sc), ((((_$t269 instanceof Object))) ? _$t269._sc : _$t269_sc)), counterBlock._sc);
            } else {
                if ((counterBlock[_$t266] instanceof Object)) counterBlock[_$t266]._sc = _ifc_max_(_$pc(0), ((((_$t266 instanceof Object))) ? _$t266._sc : _$t266_sc), _ifc_max_(((((_$t268 instanceof Object))) ? _$t268._sc : _$t268_sc), ((((_$t269 instanceof Object))) ? _$t269._sc : _$t269_sc)));
                 else {
                    counterBlock["_$t266_sc"] = _ifc_max_(_$pc(0), ((((_$t266 instanceof Object))) ? _$t266._sc : _$t266_sc), _ifc_max_(((((_$t268 instanceof Object))) ? _$t268._sc : _$t268_sc), ((((_$t269 instanceof Object))) ? _$t269._sc : _$t269_sc)));
                    counterBlock._sc = ((((counterBlock["_$t266_sc"] >= counterBlock._sc))) ? counterBlock["_$t266_sc"] : counterBlock._sc);
                }
            
            };
            _$t270 = c++;
            if (((_$t270 instanceof Object) && (_$t270 !== null))) {
                _$t270._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t270 !== null)) {
                    var _$t270_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t264 = (c < 4);
            if (((_$t264 instanceof Object) && (_$t264 !== null))) {
                _$t264._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t264 !== null)) {
                    _$t264_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        if (((((Aes["cipher"] && (Aes["cipher"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "cipher") || ("apply" === "cipher"))))))))) {
            _$t271 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc));
            _ifc_stack_.push(((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t271);
            var cipherCntr = Aes["cipher"](counterBlock, keySchedule);
            if ((cipherCntr instanceof Object)) {
                cipherCntr._sc = _ifc_stack_.pop();
            } else {
                var cipherCntr_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["cipher"]) {
            var cipherCntr = Aes["cipher"](counterBlock, keySchedule);
            if (((cipherCntr instanceof Object) && (cipherCntr !== null))) {
                cipherCntr._sc = _ifc_max_(0, _ifc_max_(0, ((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc), ((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc)));
            } else {
                if ((cipherCntr !== null)) {
                    var cipherCntr_sc = _ifc_max_(0, _ifc_max_(0, ((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc), ((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc)));
                }
            };
        }
        
    ;
        _$t273 = (blockCount - 1);
        if (((_$t273 instanceof Object) && (_$t273 !== null))) {
            _$t273._sc = _ifc_max_(0, _ifc_max_(((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc), 0));
        } else {
            if ((_$t273 !== null)) {
                var _$t273_sc = _ifc_max_(0, _ifc_max_(((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc), 0));
            }
        };
        _$t277 = plaintext.length;
        if (((_$t277 instanceof Object) && (_$t277 !== null))) {
            _$t277._sc = _ifc_max_(0, ((((plaintext.length instanceof Object))) ? plaintext.length._sc : plaintext.length_sc));
        } else {
            if ((_$t277 !== null)) {
                var _$t277_sc = _ifc_max_(0, ((((plaintext.length instanceof Object))) ? plaintext.length._sc : plaintext.length_sc));
            }
        };
        _$t276 = (((_$t277 - 1)));
        if (((_$t276 instanceof Object) && (_$t276 !== null))) {
            _$t276._sc = _ifc_max_(0, _ifc_max_(((((_$t277 instanceof Object))) ? _$t277._sc : _$t277_sc), 0));
        } else {
            if ((_$t276 !== null)) {
                var _$t276_sc = _ifc_max_(0, _ifc_max_(((((_$t277 instanceof Object))) ? _$t277._sc : _$t277_sc), 0));
            }
        };
        _$t275 = (_$t276 % blockSize);
        if (((_$t275 instanceof Object) && (_$t275 !== null))) {
            _$t275._sc = _ifc_max_(0, _ifc_max_(((((_$t276 instanceof Object))) ? _$t276._sc : _$t276_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        } else {
            if ((_$t275 !== null)) {
                var _$t275_sc = _ifc_max_(0, _ifc_max_(((((_$t276 instanceof Object))) ? _$t276._sc : _$t276_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            }
        };
        _$t274 = (_$t275 + 1);
        if (((_$t274 instanceof Object) && (_$t274 !== null))) {
            _$t274._sc = _ifc_max_(0, _ifc_max_(((((_$t275 instanceof Object))) ? _$t275._sc : _$t275_sc), 0));
        } else {
            if ((_$t274 !== null)) {
                var _$t274_sc = _ifc_max_(0, _ifc_max_(((((_$t275 instanceof Object))) ? _$t275._sc : _$t275_sc), 0));
            }
        };
        _$t272 = (b < _$t273);
        if (((_$t272 instanceof Object) && (_$t272 !== null))) {
            _$t272._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((_$t273 instanceof Object))) ? _$t273._sc : _$t273_sc)));
        } else {
            if ((_$t272 !== null)) {
                var _$t272_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((_$t273 instanceof Object))) ? _$t273._sc : _$t273_sc)));
            }
        };
        var blockLength = (_$t272 ? blockSize : _$t274);
        if (((blockLength instanceof Object) && (blockLength !== null))) {
            blockLength._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t272 instanceof Object))) ? _$t272._sc : _$t272_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc), ((((_$t274 instanceof Object))) ? _$t274._sc : _$t274_sc)));
        } else {
            if ((blockLength !== null)) {
                var blockLength_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t272 instanceof Object))) ? _$t272._sc : _$t272_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc), ((((_$t274 instanceof Object))) ? _$t274._sc : _$t274_sc)));
            }
        };
        if ((((Array && (Array._sc !== undefined))))) {
            _$t278 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
            _ifc_stack_.push(((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t278);
            var cipherChar = new Array(blockLength);
            if ((cipherChar instanceof Object)) {
                cipherChar._sc = _ifc_stack_.pop();
            } else {
                var cipherChar_sc = _ifc_stack_.pop();
            };
        }
         else if (Array) {
            var cipherChar = new Array(blockLength);
            if (((cipherChar instanceof Object) && (cipherChar !== null))) {
                cipherChar._sc = _ifc_max_(0, _ifc_max_(0, ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
            } else {
                if ((cipherChar !== null)) {
                    var cipherChar_sc = _ifc_max_(0, _ifc_max_(0, ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
                }
            };
        }
        
    ;
        var i = 0;
        if (((i instanceof Object) && (i !== null))) {
            i._sc = _ifc_max_(0, 0);
        } else {
            if ((i !== null)) {
                var i_sc = _ifc_max_(0, 0);
            }
        };
        ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
        _$t279 = (i < blockLength);
        if (((_$t279 instanceof Object) && (_$t279 !== null))) {
            _$t279._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
        } else {
            if ((_$t279 !== null)) {
                var _$t279_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t279 instanceof Object))) ? _$t279._sc : _$t279_sc)));
        for (; _$t279; ) {
            _$t284 = (b * blockSize);
            if (((_$t284 instanceof Object) && (_$t284 !== null))) {
                _$t284._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            } else {
                if ((_$t284 !== null)) {
                    var _$t284_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
                }
            };
            _$t283 = (_$t284 + i);
            if (((_$t283 instanceof Object) && (_$t283 !== null))) {
                _$t283._sc = _ifc_max_(0, _ifc_max_(((((_$t284 instanceof Object))) ? _$t284._sc : _$t284_sc), ((((i instanceof Object))) ? i._sc : i_sc)));
            } else {
                if ((_$t283 !== null)) {
                    var _$t283_sc = _ifc_max_(0, _ifc_max_(((((_$t284 instanceof Object))) ? _$t284._sc : _$t284_sc), ((((i instanceof Object))) ? i._sc : i_sc)));
                }
            };
            if (((((plaintext["charCodeAt"] && (plaintext["charCodeAt"]._sc !== undefined)))) || ((((plaintext._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
                _$t285 = ((((_$pc(0) <= plaintext._sc))) ? plaintext._sc : _$pc(0));
                _ifc_stack_.push(((((_$t283 instanceof Object))) ? _$t283._sc : _$t283_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t285);
                var _$t282 = plaintext["charCodeAt"](_$t283);
                if ((_$t282 instanceof Object)) {
                    _$t282._sc = _ifc_stack_.pop();
                } else {
                    var _$t282_sc = _ifc_stack_.pop();
                };
            }
             else if (plaintext["charCodeAt"]) {
                var _$t282 = plaintext["charCodeAt"](_$t283);
                if (((_$t282 instanceof Object) && (_$t282 !== null))) {
                    _$t282._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t283 instanceof Object))) ? _$t283._sc : _$t283_sc)));
                } else {
                    if ((_$t282 !== null)) {
                        var _$t282_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t283 instanceof Object))) ? _$t283._sc : _$t283_sc)));
                    }
                };
            }
            
        ;
            _$t281 = cipherCntr[i];
            if (((_$t281 instanceof Object) && (_$t281 !== null))) {
                _$t281._sc = _ifc_max_(0, ((((cipherCntr instanceof Array))) ? cipherCntr._sc : ((((cipherCntr["i"] instanceof Object))) ? cipherCntr["i"]._sc : cipherCntr["i_sc"])));
            } else {
                if ((_$t281 !== null)) {
                    var _$t281_sc = _ifc_max_(0, ((((cipherCntr instanceof Array))) ? cipherCntr._sc : ((((cipherCntr["i"] instanceof Object))) ? cipherCntr["i"]._sc : cipherCntr["i_sc"])));
                }
            };
            cipherChar[i] = (_$t281 ^ _$t282);
            if ((cipherChar instanceof Array)) {
                cipherChar._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t281 instanceof Object))) ? _$t281._sc : _$t281_sc), ((((_$t282 instanceof Object))) ? _$t282._sc : _$t282_sc)), cipherChar._sc);
            } else {
                if ((cipherChar[i] instanceof Object)) cipherChar[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t281 instanceof Object))) ? _$t281._sc : _$t281_sc), ((((_$t282 instanceof Object))) ? _$t282._sc : _$t282_sc)));
                 else {
                    cipherChar["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t281 instanceof Object))) ? _$t281._sc : _$t281_sc), ((((_$t282 instanceof Object))) ? _$t282._sc : _$t282_sc)));
                    cipherChar._sc = ((((cipherChar["i_sc"] >= cipherChar._sc))) ? cipherChar["i_sc"] : cipherChar._sc);
                }
            
            };
            _$t286 = cipherChar[i];
            if (((_$t286 instanceof Object) && (_$t286 !== null))) {
                _$t286._sc = _ifc_max_(0, ((((cipherChar instanceof Array))) ? cipherChar._sc : ((((cipherChar["i"] instanceof Object))) ? cipherChar["i"]._sc : cipherChar["i_sc"])));
            } else {
                if ((_$t286 !== null)) {
                    var _$t286_sc = _ifc_max_(0, ((((cipherChar instanceof Array))) ? cipherChar._sc : ((((cipherChar["i"] instanceof Object))) ? cipherChar["i"]._sc : cipherChar["i_sc"])));
                }
            };
            if (((((String["fromCharCode"] && (String["fromCharCode"]._sc !== undefined)))) || ((((String._sc !== undefined) && (((("call" === "fromCharCode") || ("apply" === "fromCharCode"))))))))) {
                _$t287 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
                _ifc_stack_.push(((((_$t286 instanceof Object))) ? _$t286._sc : _$t286_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t287);
                cipherChar[i] = String["fromCharCode"](_$t286);
                if ((cipherChar instanceof Array)) {
                    cipherChar._sc = _ifc_max_(_ifc_stack_.pop(), cipherChar._sc);
                } else {
                    if ((cipherChar[i] instanceof Object)) cipherChar[i]._sc = _ifc_stack_.pop();
                     else {
                        cipherChar["i_sc"] = _ifc_stack_.pop();
                        cipherChar._sc = ((((cipherChar["i_sc"]._sc >= cipherChar._sc))) ? cipherChar["i_sc"]._sc : cipherChar._sc);
                    }
                
                };
            }
             else if (String["fromCharCode"]) {
                cipherChar[i] = String["fromCharCode"](_$t286);
                if ((cipherChar instanceof Array)) {
                    cipherChar._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t286 instanceof Object))) ? _$t286._sc : _$t286_sc)), cipherChar._sc);
                } else {
                    if ((cipherChar[i] instanceof Object)) cipherChar[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t286 instanceof Object))) ? _$t286._sc : _$t286_sc)));
                     else {
                        cipherChar["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t286 instanceof Object))) ? _$t286._sc : _$t286_sc)));
                        cipherChar._sc = ((((cipherChar["i_sc"] >= cipherChar._sc))) ? cipherChar["i_sc"] : cipherChar._sc);
                    }
                
                };
            }
            
        ;
            _$t288 = i++;
            if (((_$t288 instanceof Object) && (_$t288 !== null))) {
                _$t288._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            } else {
                if ((_$t288 !== null)) {
                    var _$t288_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
                }
            };
            _$t279 = (i < blockLength);
            if (((_$t279 instanceof Object) && (_$t279 !== null))) {
                _$t279._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
            } else {
                if ((_$t279 !== null)) {
                    _$t279_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((blockLength instanceof Object))) ? blockLength._sc : blockLength_sc)));
                }
            };
        };
        _ifc_stack_.pop();
        if (((((cipherChar["join"] && (cipherChar["join"]._sc !== undefined)))) || ((((cipherChar._sc !== undefined) && (((("call" === "join") || ("apply" === "join"))))))))) {
            _$t289 = ((((_$pc(0) <= cipherChar._sc))) ? cipherChar._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t289);
            ciphertxt[b] = cipherChar["join"]("");
            if ((ciphertxt instanceof Array)) {
                ciphertxt._sc = _ifc_max_(_ifc_stack_.pop(), ciphertxt._sc);
            } else {
                if ((ciphertxt[b] instanceof Object)) ciphertxt[b]._sc = _ifc_stack_.pop();
                 else {
                    ciphertxt["b_sc"] = _ifc_stack_.pop();
                    ciphertxt._sc = ((((ciphertxt["b_sc"]._sc >= ciphertxt._sc))) ? ciphertxt["b_sc"]._sc : ciphertxt._sc);
                }
            
            };
        }
         else if (cipherChar["join"]) {
            ciphertxt[b] = cipherChar["join"]("");
            if ((ciphertxt instanceof Array)) {
                ciphertxt._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0), ciphertxt._sc);
            } else {
                if ((ciphertxt[b] instanceof Object)) ciphertxt[b]._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0));
                 else {
                    ciphertxt["b_sc"] = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0));
                    ciphertxt._sc = ((((ciphertxt["b_sc"] >= ciphertxt._sc))) ? ciphertxt["b_sc"] : ciphertxt._sc);
                }
            
            };
        }
        
    ;
        _$t290 = b++;
        if (((_$t290 instanceof Object) && (_$t290 !== null))) {
            _$t290._sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
        } else {
            if ((_$t290 !== null)) {
                var _$t290_sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
            }
        };
        _$t256 = (b < blockCount);
        if (((_$t256 instanceof Object) && (_$t256 !== null))) {
            _$t256._sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
        } else {
            if ((_$t256 !== null)) {
                _$t256_sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockCount instanceof Object))) ? blockCount._sc : blockCount_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((ciphertxt["join"] && (ciphertxt["join"]._sc !== undefined)))) || ((((ciphertxt._sc !== undefined) && (((("call" === "join") || ("apply" === "join"))))))))) {
        _$t292 = ((((_$pc(0) <= ciphertxt._sc))) ? ciphertxt._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t292);
        var _$t291 = ciphertxt["join"]("");
        if ((_$t291 instanceof Object)) {
            _$t291._sc = _ifc_stack_.pop();
        } else {
            var _$t291_sc = _ifc_stack_.pop();
        };
    }
     else if (ciphertxt["join"]) {
        var _$t291 = ciphertxt["join"]("");
        if (((_$t291 instanceof Object) && (_$t291 !== null))) {
            _$t291._sc = _ifc_max_(0, _ifc_max_(0, 0));
        } else {
            if ((_$t291 !== null)) {
                var _$t291_sc = _ifc_max_(0, _ifc_max_(0, 0));
            }
        };
    }
    
;
    var ciphertext = (ctrTxt + _$t291);
    if (((ciphertext instanceof Object) && (ciphertext !== null))) {
        ciphertext._sc = _ifc_max_(0, _ifc_max_(((((ctrTxt instanceof Object))) ? ctrTxt._sc : ctrTxt_sc), ((((_$t291 instanceof Object))) ? _$t291._sc : _$t291_sc)));
    } else {
        if ((ciphertext !== null)) {
            var ciphertext_sc = _ifc_max_(0, _ifc_max_(((((ctrTxt instanceof Object))) ? ctrTxt._sc : ctrTxt_sc), ((((_$t291 instanceof Object))) ? _$t291._sc : _$t291_sc)));
        }
    };
    if (((((ciphertext["base64Encode"] && (ciphertext["base64Encode"]._sc !== undefined)))) || ((((ciphertext._sc !== undefined) && (((("call" === "base64Encode") || ("apply" === "base64Encode"))))))))) {
        _$t293 = ((((_$pc(0) <= ciphertext._sc))) ? ciphertext._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t293);
        ciphertext = ciphertext["base64Encode"]();
        if ((ciphertext instanceof Object)) {
            ciphertext._sc = _ifc_stack_.pop();
        } else {
            ciphertext_sc = _ifc_stack_.pop();
        };
    }
     else if (ciphertext["base64Encode"]) {
        ciphertext = ciphertext["base64Encode"]();
        if (((ciphertext instanceof Object) && (ciphertext !== null))) {
            ciphertext._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((ciphertext !== null)) {
                ciphertext_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    _$t294 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), ((((ciphertext instanceof Object))) ? ciphertext._sc : ciphertext_sc));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t294); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return ciphertext;
};
Aes["Ctr"]["encrypt"]._sc = 0;
Aes.Ctr.decrypt = function(ciphertext, password, nBits) {
    var blockSize = 16;
    if (((blockSize instanceof Object) && (blockSize !== null))) {
        blockSize._sc = _ifc_max_(0, 0);
    } else {
        if ((blockSize !== null)) {
            var blockSize_sc = _ifc_max_(0, 0);
        }
    };
    _$t299 = (nBits == 192);
    if (((_$t299 instanceof Object) && (_$t299 !== null))) {
        _$t299._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t299 !== null)) {
            var _$t299_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t298 = (nBits == 128);
    if (((_$t298 instanceof Object) && (_$t298 !== null))) {
        _$t298._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t298 !== null)) {
            var _$t298_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t300 = (nBits == 256);
    if (((_$t300 instanceof Object) && (_$t300 !== null))) {
        _$t300._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((_$t300 !== null)) {
            var _$t300_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    _$t297 = (_$t298 || _$t299);
    if (((_$t297 instanceof Object) && (_$t297 !== null))) {
        _$t297._sc = _ifc_max_(0, _ifc_max_(((((_$t298 instanceof Object))) ? _$t298._sc : _$t298_sc), ((((_$t299 instanceof Object))) ? _$t299._sc : _$t299_sc)));
    } else {
        if ((_$t297 !== null)) {
            var _$t297_sc = _ifc_max_(0, _ifc_max_(((((_$t298 instanceof Object))) ? _$t298._sc : _$t298_sc), ((((_$t299 instanceof Object))) ? _$t299._sc : _$t299_sc)));
        }
    };
    _$t296 = (((_$t297 || _$t300)));
    if (((_$t296 instanceof Object) && (_$t296 !== null))) {
        _$t296._sc = _ifc_max_(0, _ifc_max_(((((_$t297 instanceof Object))) ? _$t297._sc : _$t297_sc), ((((_$t300 instanceof Object))) ? _$t300._sc : _$t300_sc)));
    } else {
        if ((_$t296 !== null)) {
            var _$t296_sc = _ifc_max_(0, _ifc_max_(((((_$t297 instanceof Object))) ? _$t297._sc : _$t297_sc), ((((_$t300 instanceof Object))) ? _$t300._sc : _$t300_sc)));
        }
    };
    _$t295 = !_$t296;
    if (((_$t295 instanceof Object) && (_$t295 !== null))) {
        _$t295._sc = _ifc_max_(0, ((((_$t296 instanceof Object))) ? _$t296._sc : _$t296_sc));
    } else {
        if ((_$t295 !== null)) {
            var _$t295_sc = _ifc_max_(0, ((((_$t296 instanceof Object))) ? _$t296._sc : _$t296_sc));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t295 instanceof Object))) ? _$t295._sc : _$t295_sc)));
    if (_$t295) {
        _$t301 = (_$pc(-1) + 1);
        var old_pc = _ifc_max_(_$pc(0), 0);
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t301); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return "";
    }
;
    _ifc_stack_.pop();
    if ((((String && (String._sc !== undefined))))) {
        _$t303 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
        _ifc_stack_.push((((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t303);
        var _$t302 = String(ciphertext);
        if ((_$t302 instanceof Object)) {
            _$t302._sc = _ifc_stack_.pop();
        } else {
            var _$t302_sc = _ifc_stack_.pop();
        };
    }
     else if (String) {
        var _$t302 = String(ciphertext);
        if (((_$t302 instanceof Object) && (_$t302 !== null))) {
            _$t302._sc = _ifc_max_(0, _ifc_max_(0, (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0)));
        } else {
            if ((_$t302 !== null)) {
                var _$t302_sc = _ifc_max_(0, _ifc_max_(0, (((((0 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 0)] : 0)));
            }
        };
    }
    
;
    if (((((_$t302["base64Decode"] && (_$t302["base64Decode"]._sc !== undefined)))) || ((((_$t302._sc !== undefined) && (((("call" === "base64Decode") || ("apply" === "base64Decode"))))))))) {
        _$t304 = ((((_$pc(0) <= _$t302._sc))) ? _$t302._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t304);
        ciphertext = _$t302["base64Decode"]();
        if ((ciphertext instanceof Object)) {
            ciphertext._sc = _ifc_stack_.pop();
        } else {
            ciphertext_sc = _ifc_stack_.pop();
        };
    }
     else if (_$t302["base64Decode"]) {
        ciphertext = _$t302["base64Decode"]();
        if (((ciphertext instanceof Object) && (ciphertext !== null))) {
            ciphertext._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((ciphertext !== null)) {
                ciphertext_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    if ((((String && (String._sc !== undefined))))) {
        _$t306 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
        _ifc_stack_.push((((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t306);
        var _$t305 = String(password);
        if ((_$t305 instanceof Object)) {
            _$t305._sc = _ifc_stack_.pop();
        } else {
            var _$t305_sc = _ifc_stack_.pop();
        };
    }
     else if (String) {
        var _$t305 = String(password);
        if (((_$t305 instanceof Object) && (_$t305 !== null))) {
            _$t305._sc = _ifc_max_(0, _ifc_max_(0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0)));
        } else {
            if ((_$t305 !== null)) {
                var _$t305_sc = _ifc_max_(0, _ifc_max_(0, (((((1 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 1)] : 0)));
            }
        };
    }
    
;
    if (((((_$t305["utf8Encode"] && (_$t305["utf8Encode"]._sc !== undefined)))) || ((((_$t305._sc !== undefined) && (((("call" === "utf8Encode") || ("apply" === "utf8Encode"))))))))) {
        _$t307 = ((((_$pc(0) <= _$t305._sc))) ? _$t305._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t307);
        password = _$t305["utf8Encode"]();
        if ((password instanceof Object)) {
            password._sc = _ifc_stack_.pop();
        } else {
            password_sc = _ifc_stack_.pop();
        };
    }
     else if (_$t305["utf8Encode"]) {
        password = _$t305["utf8Encode"]();
        if (((password instanceof Object) && (password !== null))) {
            password._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((password !== null)) {
                password_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    var nBytes = (nBits / 8);
    if (((nBytes instanceof Object) && (nBytes !== null))) {
        nBytes._sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
    } else {
        if ((nBytes !== null)) {
            var nBytes_sc = _ifc_max_(0, _ifc_max_((((((2 + 1) <= _ifc_stack_[((_ifc_stack_.length - 2) - 0)]))) ? _ifc_stack_[((((_ifc_stack_.length - 2) - _ifc_stack_[((_ifc_stack_.length - 2) - 0)]) - 0) + 2)] : 0), 0));
        }
    };
    if ((((Array && (Array._sc !== undefined))))) {
        _$t308 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t308);
        var pwBytes = new Array(nBytes);
        if ((pwBytes instanceof Object)) {
            pwBytes._sc = _ifc_stack_.pop();
        } else {
            var pwBytes_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var pwBytes = new Array(nBytes);
        if (((pwBytes instanceof Object) && (pwBytes !== null))) {
            pwBytes._sc = _ifc_max_(0, _ifc_max_(0, ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        } else {
            if ((pwBytes !== null)) {
                var pwBytes_sc = _ifc_max_(0, _ifc_max_(0, ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
            }
        };
    }
    
;
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t309 = (i < nBytes);
    if (((_$t309 instanceof Object) && (_$t309 !== null))) {
        _$t309._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
    } else {
        if ((_$t309 !== null)) {
            var _$t309_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t309 instanceof Object))) ? _$t309._sc : _$t309_sc)));
    for (; _$t309; ) {
        if (((((password["charCodeAt"] && (password["charCodeAt"]._sc !== undefined)))) || ((((password._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
            _$t313 = ((((_$pc(0) <= password._sc))) ? password._sc : _$pc(0));
            _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t313);
            var _$t312 = password["charCodeAt"](i);
            if ((_$t312 instanceof Object)) {
                _$t312._sc = _ifc_stack_.pop();
            } else {
                var _$t312_sc = _ifc_stack_.pop();
            };
        }
         else if (password["charCodeAt"]) {
            var _$t312 = password["charCodeAt"](i);
            if (((_$t312 instanceof Object) && (_$t312 !== null))) {
                _$t312._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            } else {
                if ((_$t312 !== null)) {
                    var _$t312_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                }
            };
        }
        
    ;
        if (((((password["charCodeAt"] && (password["charCodeAt"]._sc !== undefined)))) || ((((password._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
            _$t316 = ((((_$pc(0) <= password._sc))) ? password._sc : _$pc(0));
            _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t316);
            var _$t315 = password["charCodeAt"](i);
            if ((_$t315 instanceof Object)) {
                _$t315._sc = _ifc_stack_.pop();
            } else {
                var _$t315_sc = _ifc_stack_.pop();
            };
        }
         else if (password["charCodeAt"]) {
            var _$t315 = password["charCodeAt"](i);
            if (((_$t315 instanceof Object) && (_$t315 !== null))) {
                _$t315._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
            } else {
                if ((_$t315 !== null)) {
                    var _$t315_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                }
            };
        }
        
    ;
        if ((((isNaN && (isNaN._sc !== undefined))))) {
            _$t314 = ((((_$pc(0) <= isNaN._sc))) ? isNaN._sc : _$pc(0));
            _ifc_stack_.push(((((_$t312 instanceof Object))) ? _$t312._sc : _$t312_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t314);
            var _$t311 = isNaN(_$t312);
            if ((_$t311 instanceof Object)) {
                _$t311._sc = _ifc_stack_.pop();
            } else {
                var _$t311_sc = _ifc_stack_.pop();
            };
        }
         else if (isNaN) {
            var _$t311 = isNaN(_$t312);
            if (((_$t311 instanceof Object) && (_$t311 !== null))) {
                _$t311._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t312 instanceof Object))) ? _$t312._sc : _$t312_sc)));
            } else {
                if ((_$t311 !== null)) {
                    var _$t311_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t312 instanceof Object))) ? _$t312._sc : _$t312_sc)));
                }
            };
        }
        
    ;
        pwBytes[i] = (_$t311 ? 0 : _$t315);
        if ((pwBytes instanceof Array)) {
            pwBytes._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t311 instanceof Object))) ? _$t311._sc : _$t311_sc), 0, ((((_$t315 instanceof Object))) ? _$t315._sc : _$t315_sc)), pwBytes._sc);
        } else {
            if ((pwBytes[i] instanceof Object)) pwBytes[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t311 instanceof Object))) ? _$t311._sc : _$t311_sc), 0, ((((_$t315 instanceof Object))) ? _$t315._sc : _$t315_sc)));
             else {
                pwBytes["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t311 instanceof Object))) ? _$t311._sc : _$t311_sc), 0, ((((_$t315 instanceof Object))) ? _$t315._sc : _$t315_sc)));
                pwBytes._sc = ((((pwBytes["i_sc"] >= pwBytes._sc))) ? pwBytes["i_sc"] : pwBytes._sc);
            }
        
        };
        _$t317 = i++;
        if (((_$t317 instanceof Object) && (_$t317 !== null))) {
            _$t317._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t317 !== null)) {
                var _$t317_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t309 = (i < nBytes);
        if (((_$t309 instanceof Object) && (_$t309 !== null))) {
            _$t309._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
        } else {
            if ((_$t309 !== null)) {
                _$t309_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["keyExpansion"] && (Aes["keyExpansion"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "keyExpansion") || ("apply" === "keyExpansion"))))))))) {
        _$t319 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t319);
        var _$t318 = Aes["keyExpansion"](pwBytes);
        if ((_$t318 instanceof Object)) {
            _$t318._sc = _ifc_stack_.pop();
        } else {
            var _$t318_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["keyExpansion"]) {
        var _$t318 = Aes["keyExpansion"](pwBytes);
        if (((_$t318 instanceof Object) && (_$t318 !== null))) {
            _$t318._sc = _ifc_max_(0, _ifc_max_(0, ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
        } else {
            if ((_$t318 !== null)) {
                var _$t318_sc = _ifc_max_(0, _ifc_max_(0, ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
            }
        };
    }
    
;
    if (((((Aes["cipher"] && (Aes["cipher"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "cipher") || ("apply" === "cipher"))))))))) {
        _$t320 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc));
        _ifc_stack_.push(((((_$t318 instanceof Object))) ? _$t318._sc : _$t318_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t320);
        var key = Aes["cipher"](pwBytes, _$t318);
        if ((key instanceof Object)) {
            key._sc = _ifc_stack_.pop();
        } else {
            var key_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["cipher"]) {
        var key = Aes["cipher"](pwBytes, _$t318);
        if (((key instanceof Object) && (key !== null))) {
            key._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t318 instanceof Object))) ? _$t318._sc : _$t318_sc), ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
        } else {
            if ((key !== null)) {
                var key_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t318 instanceof Object))) ? _$t318._sc : _$t318_sc), ((((pwBytes instanceof Object))) ? pwBytes._sc : pwBytes_sc)));
            }
        };
    }
    
;
    _$t322 = (nBytes - 16);
    if (((_$t322 instanceof Object) && (_$t322 !== null))) {
        _$t322._sc = _ifc_max_(0, _ifc_max_(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc), 0));
    } else {
        if ((_$t322 !== null)) {
            var _$t322_sc = _ifc_max_(0, _ifc_max_(((((nBytes instanceof Object))) ? nBytes._sc : nBytes_sc), 0));
        }
    };
    if (((((key["slice"] && (key["slice"]._sc !== undefined)))) || ((((key._sc !== undefined) && (((("call" === "slice") || ("apply" === "slice"))))))))) {
        _$t323 = ((((_$pc(0) <= key._sc))) ? key._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(((((_$t322 instanceof Object))) ? _$t322._sc : _$t322_sc));
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t323);
        var _$t321 = key["slice"](0, _$t322);
        if ((_$t321 instanceof Object)) {
            _$t321._sc = _ifc_stack_.pop();
        } else {
            var _$t321_sc = _ifc_stack_.pop();
        };
    }
     else if (key["slice"]) {
        var _$t321 = key["slice"](0, _$t322);
        if (((_$t321 instanceof Object) && (_$t321 !== null))) {
            _$t321._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t322 instanceof Object))) ? _$t322._sc : _$t322_sc), 0));
        } else {
            if ((_$t321 !== null)) {
                var _$t321_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t322 instanceof Object))) ? _$t322._sc : _$t322_sc), 0));
            }
        };
    }
    
;
    if (((((key["concat"] && (key["concat"]._sc !== undefined)))) || ((((key._sc !== undefined) && (((("call" === "concat") || ("apply" === "concat"))))))))) {
        _$t324 = ((((_$pc(0) <= key._sc))) ? key._sc : _$pc(0));
        _ifc_stack_.push(((((_$t321 instanceof Object))) ? _$t321._sc : _$t321_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t324);
        key = key["concat"](_$t321);
        if ((key instanceof Object)) {
            key._sc = _ifc_stack_.pop();
        } else {
            key_sc = _ifc_stack_.pop();
        };
    }
     else if (key["concat"]) {
        key = key["concat"](_$t321);
        if (((key instanceof Object) && (key !== null))) {
            key._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t321 instanceof Object))) ? _$t321._sc : _$t321_sc)));
        } else {
            if ((key !== null)) {
                key_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0), ((((_$t321 instanceof Object))) ? _$t321._sc : _$t321_sc)));
            }
        };
    }
    
;
    if ((((Array && (Array._sc !== undefined))))) {
        _$t325 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t325);
        var counterBlock = new Array(8);
        if ((counterBlock instanceof Object)) {
            counterBlock._sc = _ifc_stack_.pop();
        } else {
            var counterBlock_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var counterBlock = new Array(8);
        if (((counterBlock instanceof Object) && (counterBlock !== null))) {
            counterBlock._sc = _ifc_max_(0, _ifc_max_(0, 0));
        } else {
            if ((counterBlock !== null)) {
                var counterBlock_sc = _ifc_max_(0, _ifc_max_(0, 0));
            }
        };
    }
    
;
    if (((((ciphertext["slice"] && (ciphertext["slice"]._sc !== undefined)))) || ((((ciphertext._sc !== undefined) && (((("call" === "slice") || ("apply" === "slice"))))))))) {
        _$t326 = ((((_$pc(0) <= ciphertext._sc))) ? ciphertext._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(0);
        _ifc_stack_.push(2);
        _ifc_stack_.push(_$t326);
        var ctrTxt = ciphertext["slice"](0, 8);
        if ((ctrTxt instanceof Object)) {
            ctrTxt._sc = _ifc_stack_.pop();
        } else {
            var ctrTxt_sc = _ifc_stack_.pop();
        };
    }
     else if (ciphertext["slice"]) {
        var ctrTxt = ciphertext["slice"](0, 8);
        if (((ctrTxt instanceof Object) && (ctrTxt !== null))) {
            ctrTxt._sc = _ifc_max_(0, _ifc_max_(0, 0, 0));
        } else {
            if ((ctrTxt !== null)) {
                var ctrTxt_sc = _ifc_max_(0, _ifc_max_(0, 0, 0));
            }
        };
    }
    
;
    var i = 0;
    if (((i instanceof Object) && (i !== null))) {
        i._sc = _ifc_max_(0, 0);
    } else {
        if ((i !== null)) {
            var i_sc = _ifc_max_(0, 0);
        }
    };
    ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
    _$t327 = (i < 8);
    if (((_$t327 instanceof Object) && (_$t327 !== null))) {
        _$t327._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
    } else {
        if ((_$t327 !== null)) {
            var _$t327_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t327 instanceof Object))) ? _$t327._sc : _$t327_sc)));
    for (; _$t327; ) {
        if (((((ctrTxt["charCodeAt"] && (ctrTxt["charCodeAt"]._sc !== undefined)))) || ((((ctrTxt._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
            _$t329 = ((((_$pc(0) <= ctrTxt._sc))) ? ctrTxt._sc : _$pc(0));
            _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t329);
            counterBlock[i] = ctrTxt["charCodeAt"](i);
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_ifc_stack_.pop(), counterBlock._sc);
            } else {
                if ((counterBlock[i] instanceof Object)) counterBlock[i]._sc = _ifc_stack_.pop();
                 else {
                    counterBlock["i_sc"] = _ifc_stack_.pop();
                    counterBlock._sc = ((((counterBlock["i_sc"]._sc >= counterBlock._sc))) ? counterBlock["i_sc"]._sc : counterBlock._sc);
                }
            
            };
        }
         else if (ctrTxt["charCodeAt"]) {
            counterBlock[i] = ctrTxt["charCodeAt"](i);
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((i instanceof Object))) ? i._sc : i_sc)), counterBlock._sc);
            } else {
                if ((counterBlock[i] instanceof Object)) counterBlock[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((i instanceof Object))) ? i._sc : i_sc)));
                 else {
                    counterBlock["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((i instanceof Object))) ? i._sc : i_sc)));
                    counterBlock._sc = ((((counterBlock["i_sc"] >= counterBlock._sc))) ? counterBlock["i_sc"] : counterBlock._sc);
                }
            
            };
        }
        
    ;
        _$t330 = i++;
        if (((_$t330 instanceof Object) && (_$t330 !== null))) {
            _$t330._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
        } else {
            if ((_$t330 !== null)) {
                var _$t330_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            }
        };
        _$t327 = (i < 8);
        if (((_$t327 instanceof Object) && (_$t327 !== null))) {
            _$t327._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
        } else {
            if ((_$t327 !== null)) {
                _$t327_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), 0));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((Aes["keyExpansion"] && (Aes["keyExpansion"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "keyExpansion") || ("apply" === "keyExpansion"))))))))) {
        _$t331 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
        _ifc_stack_.push(((((key instanceof Object))) ? key._sc : key_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t331);
        var keySchedule = Aes["keyExpansion"](key);
        if ((keySchedule instanceof Object)) {
            keySchedule._sc = _ifc_stack_.pop();
        } else {
            var keySchedule_sc = _ifc_stack_.pop();
        };
    }
     else if (Aes["keyExpansion"]) {
        var keySchedule = Aes["keyExpansion"](key);
        if (((keySchedule instanceof Object) && (keySchedule !== null))) {
            keySchedule._sc = _ifc_max_(0, _ifc_max_(0, ((((key instanceof Object))) ? key._sc : key_sc)));
        } else {
            if ((keySchedule !== null)) {
                var keySchedule_sc = _ifc_max_(0, _ifc_max_(0, ((((key instanceof Object))) ? key._sc : key_sc)));
            }
        };
    }
    
;
    _$t334 = ciphertext.length;
    if (((_$t334 instanceof Object) && (_$t334 !== null))) {
        _$t334._sc = _ifc_max_(0, ((((ciphertext.length instanceof Object))) ? ciphertext.length._sc : ciphertext.length_sc));
    } else {
        if ((_$t334 !== null)) {
            var _$t334_sc = _ifc_max_(0, ((((ciphertext.length instanceof Object))) ? ciphertext.length._sc : ciphertext.length_sc));
        }
    };
    _$t333 = (((_$t334 - 8)));
    if (((_$t333 instanceof Object) && (_$t333 !== null))) {
        _$t333._sc = _ifc_max_(0, _ifc_max_(((((_$t334 instanceof Object))) ? _$t334._sc : _$t334_sc), 0));
    } else {
        if ((_$t333 !== null)) {
            var _$t333_sc = _ifc_max_(0, _ifc_max_(((((_$t334 instanceof Object))) ? _$t334._sc : _$t334_sc), 0));
        }
    };
    _$t332 = (_$t333 / blockSize);
    if (((_$t332 instanceof Object) && (_$t332 !== null))) {
        _$t332._sc = _ifc_max_(0, _ifc_max_(((((_$t333 instanceof Object))) ? _$t333._sc : _$t333_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
    } else {
        if ((_$t332 !== null)) {
            var _$t332_sc = _ifc_max_(0, _ifc_max_(((((_$t333 instanceof Object))) ? _$t333._sc : _$t333_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        }
    };
    if (((((Math["ceil"] && (Math["ceil"]._sc !== undefined)))) || ((((Math._sc !== undefined) && (((("call" === "ceil") || ("apply" === "ceil"))))))))) {
        _$t335 = ((((_$pc(0) <= Math._sc))) ? Math._sc : _$pc(0));
        _ifc_stack_.push(((((_$t332 instanceof Object))) ? _$t332._sc : _$t332_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t335);
        var nBlocks = Math["ceil"](_$t332);
        if ((nBlocks instanceof Object)) {
            nBlocks._sc = _ifc_stack_.pop();
        } else {
            var nBlocks_sc = _ifc_stack_.pop();
        };
    }
     else if (Math["ceil"]) {
        var nBlocks = Math["ceil"](_$t332);
        if (((nBlocks instanceof Object) && (nBlocks !== null))) {
            nBlocks._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t332 instanceof Object))) ? _$t332._sc : _$t332_sc)));
        } else {
            if ((nBlocks !== null)) {
                var nBlocks_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t332 instanceof Object))) ? _$t332._sc : _$t332_sc)));
            }
        };
    }
    
;
    if ((((Array && (Array._sc !== undefined))))) {
        _$t336 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t336);
        var ct = new Array(nBlocks);
        if ((ct instanceof Object)) {
            ct._sc = _ifc_stack_.pop();
        } else {
            var ct_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var ct = new Array(nBlocks);
        if (((ct instanceof Object) && (ct !== null))) {
            ct._sc = _ifc_max_(0, _ifc_max_(0, ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
        } else {
            if ((ct !== null)) {
                var ct_sc = _ifc_max_(0, _ifc_max_(0, ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
            }
        };
    }
    
;
    var b = 0;
    if (((b instanceof Object) && (b !== null))) {
        b._sc = _ifc_max_(0, 0);
    } else {
        if ((b !== null)) {
            var b_sc = _ifc_max_(0, 0);
        }
    };
    ((((b instanceof Object))) ? b._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)) : b_sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)));
    _$t337 = (b < nBlocks);
    if (((_$t337 instanceof Object) && (_$t337 !== null))) {
        _$t337._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
    } else {
        if ((_$t337 !== null)) {
            var _$t337_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t337 instanceof Object))) ? _$t337._sc : _$t337_sc)));
    for (; _$t337; ) {
        _$t340 = (b * blockSize);
        if (((_$t340 instanceof Object) && (_$t340 !== null))) {
            _$t340._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        } else {
            if ((_$t340 !== null)) {
                var _$t340_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            }
        };
        _$t343 = (b * blockSize);
        if (((_$t343 instanceof Object) && (_$t343 !== null))) {
            _$t343._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        } else {
            if ((_$t343 !== null)) {
                var _$t343_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            }
        };
        _$t342 = (8 + _$t343);
        if (((_$t342 instanceof Object) && (_$t342 !== null))) {
            _$t342._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t343 instanceof Object))) ? _$t343._sc : _$t343_sc)));
        } else {
            if ((_$t342 !== null)) {
                var _$t342_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t343 instanceof Object))) ? _$t343._sc : _$t343_sc)));
            }
        };
        _$t341 = (_$t342 + blockSize);
        if (((_$t341 instanceof Object) && (_$t341 !== null))) {
            _$t341._sc = _ifc_max_(0, _ifc_max_(((((_$t342 instanceof Object))) ? _$t342._sc : _$t342_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
        } else {
            if ((_$t341 !== null)) {
                var _$t341_sc = _ifc_max_(0, _ifc_max_(((((_$t342 instanceof Object))) ? _$t342._sc : _$t342_sc), ((((blockSize instanceof Object))) ? blockSize._sc : blockSize_sc)));
            }
        };
        _$t339 = (8 + _$t340);
        if (((_$t339 instanceof Object) && (_$t339 !== null))) {
            _$t339._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t340 instanceof Object))) ? _$t340._sc : _$t340_sc)));
        } else {
            if ((_$t339 !== null)) {
                var _$t339_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t340 instanceof Object))) ? _$t340._sc : _$t340_sc)));
            }
        };
        if (((((ciphertext["slice"] && (ciphertext["slice"]._sc !== undefined)))) || ((((ciphertext._sc !== undefined) && (((("call" === "slice") || ("apply" === "slice"))))))))) {
            _$t344 = ((((_$pc(0) <= ciphertext._sc))) ? ciphertext._sc : _$pc(0));
            _ifc_stack_.push(((((_$t339 instanceof Object))) ? _$t339._sc : _$t339_sc));
            _ifc_stack_.push(((((_$t341 instanceof Object))) ? _$t341._sc : _$t341_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t344);
            ct[b] = ciphertext["slice"](_$t339, _$t341);
            if ((ct instanceof Array)) {
                ct._sc = _ifc_max_(_ifc_stack_.pop(), ct._sc);
            } else {
                if ((ct[b] instanceof Object)) ct[b]._sc = _ifc_stack_.pop();
                 else {
                    ct["b_sc"] = _ifc_stack_.pop();
                    ct._sc = ((((ct["b_sc"]._sc >= ct._sc))) ? ct["b_sc"]._sc : ct._sc);
                }
            
            };
        }
         else if (ciphertext["slice"]) {
            ct[b] = ciphertext["slice"](_$t339, _$t341);
            if ((ct instanceof Array)) {
                ct._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), ((((_$t341 instanceof Object))) ? _$t341._sc : _$t341_sc), ((((_$t339 instanceof Object))) ? _$t339._sc : _$t339_sc)), ct._sc);
            } else {
                if ((ct[b] instanceof Object)) ct[b]._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), ((((_$t341 instanceof Object))) ? _$t341._sc : _$t341_sc), ((((_$t339 instanceof Object))) ? _$t339._sc : _$t339_sc)));
                 else {
                    ct["b_sc"] = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), ((((_$t341 instanceof Object))) ? _$t341._sc : _$t341_sc), ((((_$t339 instanceof Object))) ? _$t339._sc : _$t339_sc)));
                    ct._sc = ((((ct["b_sc"] >= ct._sc))) ? ct["b_sc"] : ct._sc);
                }
            
            };
        }
        
    ;
        _$t345 = b++;
        if (((_$t345 instanceof Object) && (_$t345 !== null))) {
            _$t345._sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
        } else {
            if ((_$t345 !== null)) {
                var _$t345_sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
            }
        };
        _$t337 = (b < nBlocks);
        if (((_$t337 instanceof Object) && (_$t337 !== null))) {
            _$t337._sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
        } else {
            if ((_$t337 !== null)) {
                _$t337_sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    ciphertext = ct;
    if (((ciphertext instanceof Object) && (ciphertext !== null))) {
        ciphertext._sc = _ifc_max_(_$pc(0), ((((ct instanceof Object))) ? ct._sc : ct_sc));
    } else {
        if ((ciphertext !== null)) {
            ciphertext_sc = _ifc_max_(_$pc(0), ((((ct instanceof Object))) ? ct._sc : ct_sc));
        }
    };
    _$t346 = ciphertext.length;
    if (((_$t346 instanceof Object) && (_$t346 !== null))) {
        _$t346._sc = _ifc_max_(0, ((((ciphertext.length instanceof Object))) ? ciphertext.length._sc : ciphertext.length_sc));
    } else {
        if ((_$t346 !== null)) {
            var _$t346_sc = _ifc_max_(0, ((((ciphertext.length instanceof Object))) ? ciphertext.length._sc : ciphertext.length_sc));
        }
    };
    if ((((Array && (Array._sc !== undefined))))) {
        _$t347 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
        _ifc_stack_.push(((((_$t346 instanceof Object))) ? _$t346._sc : _$t346_sc));
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t347);
        var plaintxt = new Array(_$t346);
        if ((plaintxt instanceof Object)) {
            plaintxt._sc = _ifc_stack_.pop();
        } else {
            var plaintxt_sc = _ifc_stack_.pop();
        };
    }
     else if (Array) {
        var plaintxt = new Array(_$t346);
        if (((plaintxt instanceof Object) && (plaintxt !== null))) {
            plaintxt._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t346 instanceof Object))) ? _$t346._sc : _$t346_sc)));
        } else {
            if ((plaintxt !== null)) {
                var plaintxt_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t346 instanceof Object))) ? _$t346._sc : _$t346_sc)));
            }
        };
    }
    
;
    var b = 0;
    if (((b instanceof Object) && (b !== null))) {
        b._sc = _ifc_max_(0, 0);
    } else {
        if ((b !== null)) {
            var b_sc = _ifc_max_(0, 0);
        }
    };
    ((((b instanceof Object))) ? b._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)) : b_sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc)));
    _$t348 = (b < nBlocks);
    if (((_$t348 instanceof Object) && (_$t348 !== null))) {
        _$t348._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
    } else {
        if ((_$t348 !== null)) {
            var _$t348_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
        }
    };
    _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t348 instanceof Object))) ? _$t348._sc : _$t348_sc)));
    for (; _$t348; ) {
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t350 = (c < 4);
        if (((_$t350 instanceof Object) && (_$t350 !== null))) {
            _$t350._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t350 !== null)) {
                var _$t350_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t350 instanceof Object))) ? _$t350._sc : _$t350_sc)));
        for (; _$t350; ) {
            _$t352 = (15 - c);
            if (((_$t352 instanceof Object) && (_$t352 !== null))) {
                _$t352._sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
            } else {
                if ((_$t352 !== null)) {
                    var _$t352_sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
                }
            };
            _$t355 = (c * 8);
            if (((_$t355 instanceof Object) && (_$t355 !== null))) {
                _$t355._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t355 !== null)) {
                    var _$t355_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
            _$t354 = ((b));
            if (((_$t354 instanceof Object) && (_$t354 !== null))) {
                _$t354._sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
            } else {
                if ((_$t354 !== null)) {
                    var _$t354_sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
                }
            };
            _$t353 = (((_$t354 >>> _$t355)));
            if (((_$t353 instanceof Object) && (_$t353 !== null))) {
                _$t353._sc = _ifc_max_(0, _ifc_max_(((((_$t354 instanceof Object))) ? _$t354._sc : _$t354_sc), ((((_$t355 instanceof Object))) ? _$t355._sc : _$t355_sc)));
            } else {
                if ((_$t353 !== null)) {
                    var _$t353_sc = _ifc_max_(0, _ifc_max_(((((_$t354 instanceof Object))) ? _$t354._sc : _$t354_sc), ((((_$t355 instanceof Object))) ? _$t355._sc : _$t355_sc)));
                }
            };
            counterBlock[_$t352] = (_$t353 & 255);
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t352 instanceof Object))) ? _$t352._sc : _$t352_sc), _ifc_max_(((((_$t353 instanceof Object))) ? _$t353._sc : _$t353_sc), 0), counterBlock._sc);
            } else {
                if ((counterBlock[_$t352] instanceof Object)) counterBlock[_$t352]._sc = _ifc_max_(_$pc(0), ((((_$t352 instanceof Object))) ? _$t352._sc : _$t352_sc), _ifc_max_(((((_$t353 instanceof Object))) ? _$t353._sc : _$t353_sc), 0));
                 else {
                    counterBlock["_$t352_sc"] = _ifc_max_(_$pc(0), ((((_$t352 instanceof Object))) ? _$t352._sc : _$t352_sc), _ifc_max_(((((_$t353 instanceof Object))) ? _$t353._sc : _$t353_sc), 0));
                    counterBlock._sc = ((((counterBlock["_$t352_sc"] >= counterBlock._sc))) ? counterBlock["_$t352_sc"] : counterBlock._sc);
                }
            
            };
            _$t356 = c++;
            if (((_$t356 instanceof Object) && (_$t356 !== null))) {
                _$t356._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t356 !== null)) {
                    var _$t356_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t350 = (c < 4);
            if (((_$t350 instanceof Object) && (_$t350 !== null))) {
                _$t350._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t350 !== null)) {
                    _$t350_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        var c = 0;
        if (((c instanceof Object) && (c !== null))) {
            c._sc = _ifc_max_(0, 0);
        } else {
            if ((c !== null)) {
                var c_sc = _ifc_max_(0, 0);
            }
        };
        ((((c instanceof Object))) ? c._sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)) : c_sc = _ifc_max_(_$pc(0), ((((c instanceof Object))) ? c._sc : c_sc)));
        _$t357 = (c < 4);
        if (((_$t357 instanceof Object) && (_$t357 !== null))) {
            _$t357._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
        } else {
            if ((_$t357 !== null)) {
                var _$t357_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t357 instanceof Object))) ? _$t357._sc : _$t357_sc)));
        for (; _$t357; ) {
            _$t360 = (15 - c);
            if (((_$t360 instanceof Object) && (_$t360 !== null))) {
                _$t360._sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
            } else {
                if ((_$t360 !== null)) {
                    var _$t360_sc = _ifc_max_(0, _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc)));
                }
            };
            _$t359 = (_$t360 - 4);
            if (((_$t359 instanceof Object) && (_$t359 !== null))) {
                _$t359._sc = _ifc_max_(0, _ifc_max_(((((_$t360 instanceof Object))) ? _$t360._sc : _$t360_sc), 0));
            } else {
                if ((_$t359 !== null)) {
                    var _$t359_sc = _ifc_max_(0, _ifc_max_(((((_$t360 instanceof Object))) ? _$t360._sc : _$t360_sc), 0));
                }
            };
            _$t364 = (((b + 1)));
            if (((_$t364 instanceof Object) && (_$t364 !== null))) {
                _$t364._sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), 0));
            } else {
                if ((_$t364 !== null)) {
                    var _$t364_sc = _ifc_max_(0, _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), 0));
                }
            };
            _$t363 = (_$t364 / 4294967296);
            if (((_$t363 instanceof Object) && (_$t363 !== null))) {
                _$t363._sc = _ifc_max_(0, _ifc_max_(((((_$t364 instanceof Object))) ? _$t364._sc : _$t364_sc), 0));
            } else {
                if ((_$t363 !== null)) {
                    var _$t363_sc = _ifc_max_(0, _ifc_max_(((((_$t364 instanceof Object))) ? _$t364._sc : _$t364_sc), 0));
                }
            };
            _$t365 = (c * 8);
            if (((_$t365 instanceof Object) && (_$t365 !== null))) {
                _$t365._sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t365 !== null)) {
                    var _$t365_sc = _ifc_max_(0, _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
            _$t362 = (((_$t363 - 1)));
            if (((_$t362 instanceof Object) && (_$t362 !== null))) {
                _$t362._sc = _ifc_max_(0, _ifc_max_(((((_$t363 instanceof Object))) ? _$t363._sc : _$t363_sc), 0));
            } else {
                if ((_$t362 !== null)) {
                    var _$t362_sc = _ifc_max_(0, _ifc_max_(((((_$t363 instanceof Object))) ? _$t363._sc : _$t363_sc), 0));
                }
            };
            _$t361 = (((_$t362 >>> _$t365)));
            if (((_$t361 instanceof Object) && (_$t361 !== null))) {
                _$t361._sc = _ifc_max_(0, _ifc_max_(((((_$t362 instanceof Object))) ? _$t362._sc : _$t362_sc), ((((_$t365 instanceof Object))) ? _$t365._sc : _$t365_sc)));
            } else {
                if ((_$t361 !== null)) {
                    var _$t361_sc = _ifc_max_(0, _ifc_max_(((((_$t362 instanceof Object))) ? _$t362._sc : _$t362_sc), ((((_$t365 instanceof Object))) ? _$t365._sc : _$t365_sc)));
                }
            };
            counterBlock[_$t359] = (_$t361 & 255);
            if ((counterBlock instanceof Array)) {
                counterBlock._sc = _ifc_max_(_$pc(0), ((((_$t359 instanceof Object))) ? _$t359._sc : _$t359_sc), _ifc_max_(((((_$t361 instanceof Object))) ? _$t361._sc : _$t361_sc), 0), counterBlock._sc);
            } else {
                if ((counterBlock[_$t359] instanceof Object)) counterBlock[_$t359]._sc = _ifc_max_(_$pc(0), ((((_$t359 instanceof Object))) ? _$t359._sc : _$t359_sc), _ifc_max_(((((_$t361 instanceof Object))) ? _$t361._sc : _$t361_sc), 0));
                 else {
                    counterBlock["_$t359_sc"] = _ifc_max_(_$pc(0), ((((_$t359 instanceof Object))) ? _$t359._sc : _$t359_sc), _ifc_max_(((((_$t361 instanceof Object))) ? _$t361._sc : _$t361_sc), 0));
                    counterBlock._sc = ((((counterBlock["_$t359_sc"] >= counterBlock._sc))) ? counterBlock["_$t359_sc"] : counterBlock._sc);
                }
            
            };
            _$t366 = c++;
            if (((_$t366 instanceof Object) && (_$t366 !== null))) {
                _$t366._sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
            } else {
                if ((_$t366 !== null)) {
                    var _$t366_sc = _ifc_max_(0, ((((c instanceof Object))) ? c._sc : c_sc));
                }
            };
            _$t357 = (c < 4);
            if (((_$t357 instanceof Object) && (_$t357 !== null))) {
                _$t357._sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
            } else {
                if ((_$t357 !== null)) {
                    _$t357_sc = _ifc_max_(_$pc(0), _ifc_max_(((((c instanceof Object))) ? c._sc : c_sc), 0));
                }
            };
        };
        _ifc_stack_.pop();
        if (((((Aes["cipher"] && (Aes["cipher"]._sc !== undefined)))) || ((((Aes._sc !== undefined) && (((("call" === "cipher") || ("apply" === "cipher"))))))))) {
            _$t367 = ((((_$pc(0) <= Aes._sc))) ? Aes._sc : _$pc(0));
            _ifc_stack_.push(((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc));
            _ifc_stack_.push(((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc));
            _ifc_stack_.push(2);
            _ifc_stack_.push(_$t367);
            var cipherCntr = Aes["cipher"](counterBlock, keySchedule);
            if ((cipherCntr instanceof Object)) {
                cipherCntr._sc = _ifc_stack_.pop();
            } else {
                var cipherCntr_sc = _ifc_stack_.pop();
            };
        }
         else if (Aes["cipher"]) {
            var cipherCntr = Aes["cipher"](counterBlock, keySchedule);
            if (((cipherCntr instanceof Object) && (cipherCntr !== null))) {
                cipherCntr._sc = _ifc_max_(0, _ifc_max_(0, ((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc), ((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc)));
            } else {
                if ((cipherCntr !== null)) {
                    var cipherCntr_sc = _ifc_max_(0, _ifc_max_(0, ((((keySchedule instanceof Object))) ? keySchedule._sc : keySchedule_sc), ((((counterBlock instanceof Object))) ? counterBlock._sc : counterBlock_sc)));
                }
            };
        }
        
    ;
        _$t369 = ciphertext[b];
        if (((_$t369 instanceof Object) && (_$t369 !== null))) {
            _$t369._sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
        } else {
            if ((_$t369 !== null)) {
                var _$t369_sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
            }
        };
        _$t368 = _$t369.length;
        if (((_$t368 instanceof Object) && (_$t368 !== null))) {
            _$t368._sc = _ifc_max_(0, ((((_$t369.length instanceof Object))) ? _$t369.length._sc : _$t369.length_sc));
        } else {
            if ((_$t368 !== null)) {
                var _$t368_sc = _ifc_max_(0, ((((_$t369.length instanceof Object))) ? _$t369.length._sc : _$t369.length_sc));
            }
        };
        if ((((Array && (Array._sc !== undefined))))) {
            _$t370 = ((((_$pc(0) <= Array._sc))) ? Array._sc : _$pc(0));
            _ifc_stack_.push(((((_$t368 instanceof Object))) ? _$t368._sc : _$t368_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t370);
            var plaintxtByte = new Array(_$t368);
            if ((plaintxtByte instanceof Object)) {
                plaintxtByte._sc = _ifc_stack_.pop();
            } else {
                var plaintxtByte_sc = _ifc_stack_.pop();
            };
        }
         else if (Array) {
            var plaintxtByte = new Array(_$t368);
            if (((plaintxtByte instanceof Object) && (plaintxtByte !== null))) {
                plaintxtByte._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t368 instanceof Object))) ? _$t368._sc : _$t368_sc)));
            } else {
                if ((plaintxtByte !== null)) {
                    var plaintxtByte_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t368 instanceof Object))) ? _$t368._sc : _$t368_sc)));
                }
            };
        }
        
    ;
        _$t374 = ciphertext[b];
        if (((_$t374 instanceof Object) && (_$t374 !== null))) {
            _$t374._sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
        } else {
            if ((_$t374 !== null)) {
                var _$t374_sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
            }
        };
        _$t373 = _$t374.length;
        if (((_$t373 instanceof Object) && (_$t373 !== null))) {
            _$t373._sc = _ifc_max_(0, ((((_$t374.length instanceof Object))) ? _$t374.length._sc : _$t374.length_sc));
        } else {
            if ((_$t373 !== null)) {
                var _$t373_sc = _ifc_max_(0, ((((_$t374.length instanceof Object))) ? _$t374.length._sc : _$t374.length_sc));
            }
        };
        var i = 0;
        if (((i instanceof Object) && (i !== null))) {
            i._sc = _ifc_max_(0, 0);
        } else {
            if ((i !== null)) {
                var i_sc = _ifc_max_(0, 0);
            }
        };
        ((((i instanceof Object))) ? i._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)) : i_sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc)));
        _$t371 = (i < _$t373);
        if (((_$t371 instanceof Object) && (_$t371 !== null))) {
            _$t371._sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t373 instanceof Object))) ? _$t373._sc : _$t373_sc)));
        } else {
            if ((_$t371 !== null)) {
                var _$t371_sc = _ifc_max_(0, _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t373 instanceof Object))) ? _$t373._sc : _$t373_sc)));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t371 instanceof Object))) ? _$t371._sc : _$t371_sc)));
        for (; _$t371; ) {
            if (((((ciphertext[b]["charCodeAt"] && (ciphertext[b]["charCodeAt"]._sc !== undefined)))) || ((((ciphertext[b]._sc !== undefined) && (((("call" === "charCodeAt") || ("apply" === "charCodeAt"))))))))) {
                _$t377 = ((((_$pc(0) <= ciphertext[b]._sc))) ? ciphertext[b]._sc : _$pc(0));
                _ifc_stack_.push(((((i instanceof Object))) ? i._sc : i_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t377);
                var _$t376 = ciphertext[b]["charCodeAt"](i);
                if ((_$t376 instanceof Object)) {
                    _$t376._sc = _ifc_stack_.pop();
                } else {
                    var _$t376_sc = _ifc_stack_.pop();
                };
            }
             else if (ciphertext[b]["charCodeAt"]) {
                var _$t376 = ciphertext[b]["charCodeAt"](i);
                if (((_$t376 instanceof Object) && (_$t376 !== null))) {
                    _$t376._sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                } else {
                    if ((_$t376 !== null)) {
                        var _$t376_sc = _ifc_max_(0, _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc)));
                    }
                };
            }
            
        ;
            _$t375 = cipherCntr[i];
            if (((_$t375 instanceof Object) && (_$t375 !== null))) {
                _$t375._sc = _ifc_max_(0, ((((cipherCntr instanceof Array))) ? cipherCntr._sc : ((((cipherCntr["i"] instanceof Object))) ? cipherCntr["i"]._sc : cipherCntr["i_sc"])));
            } else {
                if ((_$t375 !== null)) {
                    var _$t375_sc = _ifc_max_(0, ((((cipherCntr instanceof Array))) ? cipherCntr._sc : ((((cipherCntr["i"] instanceof Object))) ? cipherCntr["i"]._sc : cipherCntr["i_sc"])));
                }
            };
            plaintxtByte[i] = (_$t375 ^ _$t376);
            if ((plaintxtByte instanceof Array)) {
                plaintxtByte._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t375 instanceof Object))) ? _$t375._sc : _$t375_sc), ((((_$t376 instanceof Object))) ? _$t376._sc : _$t376_sc)), plaintxtByte._sc);
            } else {
                if ((plaintxtByte[i] instanceof Object)) plaintxtByte[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t375 instanceof Object))) ? _$t375._sc : _$t375_sc), ((((_$t376 instanceof Object))) ? _$t376._sc : _$t376_sc)));
                 else {
                    plaintxtByte["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(((((_$t375 instanceof Object))) ? _$t375._sc : _$t375_sc), ((((_$t376 instanceof Object))) ? _$t376._sc : _$t376_sc)));
                    plaintxtByte._sc = ((((plaintxtByte["i_sc"] >= plaintxtByte._sc))) ? plaintxtByte["i_sc"] : plaintxtByte._sc);
                }
            
            };
            _$t378 = plaintxtByte[i];
            if (((_$t378 instanceof Object) && (_$t378 !== null))) {
                _$t378._sc = _ifc_max_(0, ((((plaintxtByte instanceof Array))) ? plaintxtByte._sc : ((((plaintxtByte["i"] instanceof Object))) ? plaintxtByte["i"]._sc : plaintxtByte["i_sc"])));
            } else {
                if ((_$t378 !== null)) {
                    var _$t378_sc = _ifc_max_(0, ((((plaintxtByte instanceof Array))) ? plaintxtByte._sc : ((((plaintxtByte["i"] instanceof Object))) ? plaintxtByte["i"]._sc : plaintxtByte["i_sc"])));
                }
            };
            if (((((String["fromCharCode"] && (String["fromCharCode"]._sc !== undefined)))) || ((((String._sc !== undefined) && (((("call" === "fromCharCode") || ("apply" === "fromCharCode"))))))))) {
                _$t379 = ((((_$pc(0) <= String._sc))) ? String._sc : _$pc(0));
                _ifc_stack_.push(((((_$t378 instanceof Object))) ? _$t378._sc : _$t378_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t379);
                plaintxtByte[i] = String["fromCharCode"](_$t378);
                if ((plaintxtByte instanceof Array)) {
                    plaintxtByte._sc = _ifc_max_(_ifc_stack_.pop(), plaintxtByte._sc);
                } else {
                    if ((plaintxtByte[i] instanceof Object)) plaintxtByte[i]._sc = _ifc_stack_.pop();
                     else {
                        plaintxtByte["i_sc"] = _ifc_stack_.pop();
                        plaintxtByte._sc = ((((plaintxtByte["i_sc"]._sc >= plaintxtByte._sc))) ? plaintxtByte["i_sc"]._sc : plaintxtByte._sc);
                    }
                
                };
            }
             else if (String["fromCharCode"]) {
                plaintxtByte[i] = String["fromCharCode"](_$t378);
                if ((plaintxtByte instanceof Array)) {
                    plaintxtByte._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t378 instanceof Object))) ? _$t378._sc : _$t378_sc)), plaintxtByte._sc);
                } else {
                    if ((plaintxtByte[i] instanceof Object)) plaintxtByte[i]._sc = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t378 instanceof Object))) ? _$t378._sc : _$t378_sc)));
                     else {
                        plaintxtByte["i_sc"] = _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), _ifc_max_(_$pc(0), ((((i instanceof Object))) ? i._sc : i_sc), ((((_$t378 instanceof Object))) ? _$t378._sc : _$t378_sc)));
                        plaintxtByte._sc = ((((plaintxtByte["i_sc"] >= plaintxtByte._sc))) ? plaintxtByte["i_sc"] : plaintxtByte._sc);
                    }
                
                };
            }
            
        ;
            _$t380 = i++;
            if (((_$t380 instanceof Object) && (_$t380 !== null))) {
                _$t380._sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
            } else {
                if ((_$t380 !== null)) {
                    var _$t380_sc = _ifc_max_(0, ((((i instanceof Object))) ? i._sc : i_sc));
                }
            };
            _$t382 = ciphertext[b];
            if (((_$t382 instanceof Object) && (_$t382 !== null))) {
                _$t382._sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
            } else {
                if ((_$t382 !== null)) {
                    var _$t382_sc = _ifc_max_(0, ((((ciphertext instanceof Array))) ? ciphertext._sc : ((((ciphertext["b"] instanceof Object))) ? ciphertext["b"]._sc : ciphertext["b_sc"])));
                }
            };
            _$t381 = _$t382.length;
            if (((_$t381 instanceof Object) && (_$t381 !== null))) {
                _$t381._sc = _ifc_max_(0, ((((_$t382.length instanceof Object))) ? _$t382.length._sc : _$t382.length_sc));
            } else {
                if ((_$t381 !== null)) {
                    var _$t381_sc = _ifc_max_(0, ((((_$t382.length instanceof Object))) ? _$t382.length._sc : _$t382.length_sc));
                }
            };
            _$t371 = (i < _$t381);
            if (((_$t371 instanceof Object) && (_$t371 !== null))) {
                _$t371._sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t381 instanceof Object))) ? _$t381._sc : _$t381_sc)));
            } else {
                if ((_$t371 !== null)) {
                    _$t371_sc = _ifc_max_(_$pc(0), _ifc_max_(((((i instanceof Object))) ? i._sc : i_sc), ((((_$t381 instanceof Object))) ? _$t381._sc : _$t381_sc)));
                }
            };
        };
        _ifc_stack_.pop();
        if (((((plaintxtByte["join"] && (plaintxtByte["join"]._sc !== undefined)))) || ((((plaintxtByte._sc !== undefined) && (((("call" === "join") || ("apply" === "join"))))))))) {
            _$t383 = ((((_$pc(0) <= plaintxtByte._sc))) ? plaintxtByte._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t383);
            plaintxt[b] = plaintxtByte["join"]("");
            if ((plaintxt instanceof Array)) {
                plaintxt._sc = _ifc_max_(_ifc_stack_.pop(), plaintxt._sc);
            } else {
                if ((plaintxt[b] instanceof Object)) plaintxt[b]._sc = _ifc_stack_.pop();
                 else {
                    plaintxt["b_sc"] = _ifc_stack_.pop();
                    plaintxt._sc = ((((plaintxt["b_sc"]._sc >= plaintxt._sc))) ? plaintxt["b_sc"]._sc : plaintxt._sc);
                }
            
            };
        }
         else if (plaintxtByte["join"]) {
            plaintxt[b] = plaintxtByte["join"]("");
            if ((plaintxt instanceof Array)) {
                plaintxt._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0), plaintxt._sc);
            } else {
                if ((plaintxt[b] instanceof Object)) plaintxt[b]._sc = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0));
                 else {
                    plaintxt["b_sc"] = _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), _ifc_max_(_$pc(0), ((((b instanceof Object))) ? b._sc : b_sc), 0));
                    plaintxt._sc = ((((plaintxt["b_sc"] >= plaintxt._sc))) ? plaintxt["b_sc"] : plaintxt._sc);
                }
            
            };
        }
        
    ;
        _$t384 = b++;
        if (((_$t384 instanceof Object) && (_$t384 !== null))) {
            _$t384._sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
        } else {
            if ((_$t384 !== null)) {
                var _$t384_sc = _ifc_max_(0, ((((b instanceof Object))) ? b._sc : b_sc));
            }
        };
        _$t348 = (b < nBlocks);
        if (((_$t348 instanceof Object) && (_$t348 !== null))) {
            _$t348._sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
        } else {
            if ((_$t348 !== null)) {
                _$t348_sc = _ifc_max_(_$pc(0), _ifc_max_(((((b instanceof Object))) ? b._sc : b_sc), ((((nBlocks instanceof Object))) ? nBlocks._sc : nBlocks_sc)));
            }
        };
    };
    _ifc_stack_.pop();
    if (((((plaintxt["join"] && (plaintxt["join"]._sc !== undefined)))) || ((((plaintxt._sc !== undefined) && (((("call" === "join") || ("apply" === "join"))))))))) {
        _$t385 = ((((_$pc(0) <= plaintxt._sc))) ? plaintxt._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(1);
        _ifc_stack_.push(_$t385);
        var plaintext = plaintxt["join"]("");
        if ((plaintext instanceof Object)) {
            plaintext._sc = _ifc_stack_.pop();
        } else {
            var plaintext_sc = _ifc_stack_.pop();
        };
    }
     else if (plaintxt["join"]) {
        var plaintext = plaintxt["join"]("");
        if (((plaintext instanceof Object) && (plaintext !== null))) {
            plaintext._sc = _ifc_max_(0, _ifc_max_(0, 0));
        } else {
            if ((plaintext !== null)) {
                var plaintext_sc = _ifc_max_(0, _ifc_max_(0, 0));
            }
        };
    }
    
;
    if (((((plaintext["utf8Decode"] && (plaintext["utf8Decode"]._sc !== undefined)))) || ((((plaintext._sc !== undefined) && (((("call" === "utf8Decode") || ("apply" === "utf8Decode"))))))))) {
        _$t386 = ((((_$pc(0) <= plaintext._sc))) ? plaintext._sc : _$pc(0));
        _ifc_stack_.push(0);
        _ifc_stack_.push(_$t386);
        plaintext = plaintext["utf8Decode"]();
        if ((plaintext instanceof Object)) {
            plaintext._sc = _ifc_stack_.pop();
        } else {
            plaintext_sc = _ifc_stack_.pop();
        };
    }
     else if (plaintext["utf8Decode"]) {
        plaintext = plaintext["utf8Decode"]();
        if (((plaintext instanceof Object) && (plaintext !== null))) {
            plaintext._sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
        } else {
            if ((plaintext !== null)) {
                plaintext_sc = _ifc_max_(_$pc(0), _ifc_max_(_$pc(0)));
            }
        };
    }
    
;
    _$t387 = (_$pc(-1) + 1);
    var old_pc = _ifc_max_(_$pc(0), ((((plaintext instanceof Object))) ? plaintext._sc : plaintext_sc));
    for (var _ifc_i_ = 0; (_ifc_i_ < _$t387); _ifc_i_++) {
        _ifc_stack_.pop();
    };
    _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
    return plaintext;
};
Aes["Ctr"]["decrypt"]._sc = 0;
_$t389 = typeof String.prototype.utf8Encode;
if (((_$t389 instanceof Object) && (_$t389 !== null))) {
    _$t389._sc = _ifc_max_(0, ((((String.prototype.utf8Encode instanceof Object))) ? String.prototype.utf8Encode._sc : String.prototype.utf8Encode_sc));
} else {
    if ((_$t389 !== null)) {
        var _$t389_sc = _ifc_max_(0, ((((String.prototype.utf8Encode instanceof Object))) ? String.prototype.utf8Encode._sc : String.prototype.utf8Encode_sc));
    }
};
_$t388 = (_$t389 == "undefined");
if (((_$t388 instanceof Object) && (_$t388 !== null))) {
    _$t388._sc = _ifc_max_(0, _ifc_max_(((((_$t389 instanceof Object))) ? _$t389._sc : _$t389_sc), 0));
} else {
    if ((_$t388 !== null)) {
        var _$t388_sc = _ifc_max_(0, _ifc_max_(((((_$t389 instanceof Object))) ? _$t389._sc : _$t389_sc), 0));
    }
};
_ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t388 instanceof Object))) ? _$t388._sc : _$t388_sc)));
if (_$t388) {
    String.prototype.utf8Encode = function() {
        if ((((encodeURIComponent && (encodeURIComponent._sc !== undefined))))) {
            _$t393 = ((((_$pc(0) <= encodeURIComponent._sc))) ? encodeURIComponent._sc : _$pc(0));
            _ifc_stack_.push(this._sc);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t393);
            var _$t392 = encodeURIComponent(this);
            if ((_$t392 instanceof Object)) {
                _$t392._sc = _ifc_stack_.pop();
            } else {
                var _$t392_sc = _ifc_stack_.pop();
            };
        }
         else if (encodeURIComponent) {
            var _$t392 = encodeURIComponent(this);
            if (((_$t392 instanceof Object) && (_$t392 !== null))) {
                _$t392._sc = _ifc_max_(0, _ifc_max_(0, this._sc));
            } else {
                if ((_$t392 !== null)) {
                    var _$t392_sc = _ifc_max_(0, _ifc_max_(0, this._sc));
                }
            };
        }
        
    ;
        if ((((unescape && (unescape._sc !== undefined))))) {
            _$t394 = ((((_$pc(0) <= unescape._sc))) ? unescape._sc : _$pc(0));
            _ifc_stack_.push(((((_$t392 instanceof Object))) ? _$t392._sc : _$t392_sc));
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t394);
            var _$t390 = unescape(_$t392);
            if ((_$t390 instanceof Object)) {
                _$t390._sc = _ifc_stack_.pop();
            } else {
                var _$t390_sc = _ifc_stack_.pop();
            };
        }
         else if (unescape) {
            var _$t390 = unescape(_$t392);
            if (((_$t390 instanceof Object) && (_$t390 !== null))) {
                _$t390._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t392 instanceof Object))) ? _$t392._sc : _$t392_sc)));
            } else {
                if ((_$t390 !== null)) {
                    var _$t390_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t392 instanceof Object))) ? _$t392._sc : _$t392_sc)));
                }
            };
        }
        
    ;
        _$t391 = (_$pc(-1) + 1);
        var old_pc = _ifc_max_(_$pc(0), ((((_$t390 instanceof Object))) ? _$t390._sc : _$t390_sc));
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t391); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return _$t390;
    };
    String["prototype"]["utf8Encode"]._sc = 0;
}
;
_ifc_stack_.pop();
_$t396 = typeof String.prototype.utf8Decode;
if (((_$t396 instanceof Object) && (_$t396 !== null))) {
    _$t396._sc = _ifc_max_(0, ((((String.prototype.utf8Decode instanceof Object))) ? String.prototype.utf8Decode._sc : String.prototype.utf8Decode_sc));
} else {
    if ((_$t396 !== null)) {
        var _$t396_sc = _ifc_max_(0, ((((String.prototype.utf8Decode instanceof Object))) ? String.prototype.utf8Decode._sc : String.prototype.utf8Decode_sc));
    }
};
_$t395 = (_$t396 == "undefined");
if (((_$t395 instanceof Object) && (_$t395 !== null))) {
    _$t395._sc = _ifc_max_(0, _ifc_max_(((((_$t396 instanceof Object))) ? _$t396._sc : _$t396_sc), 0));
} else {
    if ((_$t395 !== null)) {
        var _$t395_sc = _ifc_max_(0, _ifc_max_(((((_$t396 instanceof Object))) ? _$t396._sc : _$t396_sc), 0));
    }
};
_ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t395 instanceof Object))) ? _$t395._sc : _$t395_sc)));
if (_$t395) {
    String.prototype.utf8Decode = function() {
        try {
            if ((((escape && (escape._sc !== undefined))))) {
                _$t400 = ((((_$pc(0) <= escape._sc))) ? escape._sc : _$pc(0));
                _ifc_stack_.push(this._sc);
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t400);
                var _$t399 = escape(this);
                if ((_$t399 instanceof Object)) {
                    _$t399._sc = _ifc_stack_.pop();
                } else {
                    var _$t399_sc = _ifc_stack_.pop();
                };
            }
             else if (escape) {
                var _$t399 = escape(this);
                if (((_$t399 instanceof Object) && (_$t399 !== null))) {
                    _$t399._sc = _ifc_max_(0, _ifc_max_(0, this._sc));
                } else {
                    if ((_$t399 !== null)) {
                        var _$t399_sc = _ifc_max_(0, _ifc_max_(0, this._sc));
                    }
                };
            }
            
        ;
            if ((((decodeURIComponent && (decodeURIComponent._sc !== undefined))))) {
                _$t401 = ((((_$pc(0) <= decodeURIComponent._sc))) ? decodeURIComponent._sc : _$pc(0));
                _ifc_stack_.push(((((_$t399 instanceof Object))) ? _$t399._sc : _$t399_sc));
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t401);
                var _$t397 = decodeURIComponent(_$t399);
                if ((_$t397 instanceof Object)) {
                    _$t397._sc = _ifc_stack_.pop();
                } else {
                    var _$t397_sc = _ifc_stack_.pop();
                };
            }
             else if (decodeURIComponent) {
                var _$t397 = decodeURIComponent(_$t399);
                if (((_$t397 instanceof Object) && (_$t397 !== null))) {
                    _$t397._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t399 instanceof Object))) ? _$t399._sc : _$t399_sc)));
                } else {
                    if ((_$t397 !== null)) {
                        var _$t397_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t399 instanceof Object))) ? _$t399._sc : _$t399_sc)));
                    }
                };
            }
            
        ;
            _$t398 = (_$pc(-1) + 1);
            var old_pc = _ifc_max_(_$pc(0), ((((_$t397 instanceof Object))) ? _$t397._sc : _$t397_sc));
            for (var _ifc_i_ = 0; (_ifc_i_ < _$t398); _ifc_i_++) {
                _ifc_stack_.pop();
            };
            _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
            return _$t397;
        } catch (e) {
            _$t402 = (_$pc(-1) + 1);
            var old_pc = _ifc_max_(_$pc(0), this._sc);
            for (var _ifc_i_ = 0; (_ifc_i_ < _$t402); _ifc_i_++) {
                _ifc_stack_.pop();
            };
            _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
            return this;
            _ifc_stack_.pop();
        };
        _$t403 = (_$pc(-1) + 1);
        var old_pc = _$pc(0);
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t403); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return;
    };
    String["prototype"]["utf8Decode"]._sc = 0;
}
;
_ifc_stack_.pop();
_$t405 = typeof String.prototype.base64Encode;
if (((_$t405 instanceof Object) && (_$t405 !== null))) {
    _$t405._sc = _ifc_max_(0, ((((String.prototype.base64Encode instanceof Object))) ? String.prototype.base64Encode._sc : String.prototype.base64Encode_sc));
} else {
    if ((_$t405 !== null)) {
        var _$t405_sc = _ifc_max_(0, ((((String.prototype.base64Encode instanceof Object))) ? String.prototype.base64Encode._sc : String.prototype.base64Encode_sc));
    }
};
_$t404 = (_$t405 == "undefined");
if (((_$t404 instanceof Object) && (_$t404 !== null))) {
    _$t404._sc = _ifc_max_(0, _ifc_max_(((((_$t405 instanceof Object))) ? _$t405._sc : _$t405_sc), 0));
} else {
    if ((_$t404 !== null)) {
        var _$t404_sc = _ifc_max_(0, _ifc_max_(((((_$t405 instanceof Object))) ? _$t405._sc : _$t405_sc), 0));
    }
};
_ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t404 instanceof Object))) ? _$t404._sc : _$t404_sc)));
if (_$t404) {
    String.prototype.base64Encode = function() {
        _$t407 = typeof Buffer;
        if (((_$t407 instanceof Object) && (_$t407 !== null))) {
            _$t407._sc = _ifc_max_(0, ((((Buffer instanceof Object))) ? Buffer._sc : Buffer_sc));
        } else {
            if ((_$t407 !== null)) {
                var _$t407_sc = _ifc_max_(0, ((((Buffer instanceof Object))) ? Buffer._sc : Buffer_sc));
            }
        };
        _$t406 = (_$t407 != "undefined");
        if (((_$t406 instanceof Object) && (_$t406 !== null))) {
            _$t406._sc = _ifc_max_(0, _ifc_max_(((((_$t407 instanceof Object))) ? _$t407._sc : _$t407_sc), 0));
        } else {
            if ((_$t406 !== null)) {
                var _$t406_sc = _ifc_max_(0, _ifc_max_(((((_$t407 instanceof Object))) ? _$t407._sc : _$t407_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t406 instanceof Object))) ? _$t406._sc : _$t406_sc)));
        if (_$t406) {
            if ((((Buffer && (Buffer._sc !== undefined))))) {
                _$t411 = ((((_$pc(0) <= Buffer._sc))) ? Buffer._sc : _$pc(0));
                _ifc_stack_.push(this._sc);
                _ifc_stack_.push(0);
                _ifc_stack_.push(2);
                _ifc_stack_.push(_$t411);
                var _$t410 = new Buffer(this, "utf8");
                if ((_$t410 instanceof Object)) {
                    _$t410._sc = _ifc_stack_.pop();
                } else {
                    var _$t410_sc = _ifc_stack_.pop();
                };
            }
             else if (Buffer) {
                var _$t410 = new Buffer(this, "utf8");
                if (((_$t410 instanceof Object) && (_$t410 !== null))) {
                    _$t410._sc = _ifc_max_(0, _ifc_max_(0, 0, this._sc));
                } else {
                    if ((_$t410 !== null)) {
                        var _$t410_sc = _ifc_max_(0, _ifc_max_(0, 0, this._sc));
                    }
                };
            }
            
        ;
            if (((((_$t410["toString"] && (_$t410["toString"]._sc !== undefined)))) || ((((_$t410._sc !== undefined) && (((("call" === "toString") || ("apply" === "toString"))))))))) {
                _$t412 = ((((_$pc(0) <= _$t410._sc))) ? _$t410._sc : _$pc(0));
                _ifc_stack_.push(0);
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t412);
                var _$t408 = _$t410["toString"]("base64");
                if ((_$t408 instanceof Object)) {
                    _$t408._sc = _ifc_stack_.pop();
                } else {
                    var _$t408_sc = _ifc_stack_.pop();
                };
            }
             else if (_$t410["toString"]) {
                var _$t408 = _$t410["toString"]("base64");
                if (((_$t408 instanceof Object) && (_$t408 !== null))) {
                    _$t408._sc = _ifc_max_(0, _ifc_max_(0, 0));
                } else {
                    if ((_$t408 !== null)) {
                        var _$t408_sc = _ifc_max_(0, _ifc_max_(0, 0));
                    }
                };
            }
            
        ;
            _$t409 = (_$pc(-1) + 1);
            var old_pc = _ifc_max_(_$pc(0), ((((_$t408 instanceof Object))) ? _$t408._sc : _$t408_sc));
            for (var _ifc_i_ = 0; (_ifc_i_ < _$t409); _ifc_i_++) {
                _ifc_stack_.pop();
            };
            _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
            return _$t408;
        }
    ;
        _ifc_stack_.pop();
        if ((((Error && (Error._sc !== undefined))))) {
            _$t414 = ((((_$pc(0) <= Error._sc))) ? Error._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t414);
            var _$t413 = new Error("No Base64 Encode");
            if ((_$t413 instanceof Object)) {
                _$t413._sc = _ifc_stack_.pop();
            } else {
                var _$t413_sc = _ifc_stack_.pop();
            };
        }
         else if (Error) {
            var _$t413 = new Error("No Base64 Encode");
            if (((_$t413 instanceof Object) && (_$t413 !== null))) {
                _$t413._sc = _ifc_max_(0, _ifc_max_(0, 0));
            } else {
                if ((_$t413 !== null)) {
                    var _$t413_sc = _ifc_max_(0, _ifc_max_(0, 0));
                }
            };
        }
        
    ;
        var old_pc = _ifc_max_(_$pc(0), ((((_$t413 instanceof Object))) ? _$t413._sc : _$t413_sc));
        for (var _ifc_i_ = 0; (_ifc_i_ < 0); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        throw _$t413;
        _$t415 = (_$pc(-1) + 1);
        var old_pc = _$pc(0);
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t415); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return;
    };
    String["prototype"]["base64Encode"]._sc = 0;
}
;
_ifc_stack_.pop();
_$t417 = typeof String.prototype.base64Decode;
if (((_$t417 instanceof Object) && (_$t417 !== null))) {
    _$t417._sc = _ifc_max_(0, ((((String.prototype.base64Decode instanceof Object))) ? String.prototype.base64Decode._sc : String.prototype.base64Decode_sc));
} else {
    if ((_$t417 !== null)) {
        var _$t417_sc = _ifc_max_(0, ((((String.prototype.base64Decode instanceof Object))) ? String.prototype.base64Decode._sc : String.prototype.base64Decode_sc));
    }
};
_$t416 = (_$t417 == "undefined");
if (((_$t416 instanceof Object) && (_$t416 !== null))) {
    _$t416._sc = _ifc_max_(0, _ifc_max_(((((_$t417 instanceof Object))) ? _$t417._sc : _$t417_sc), 0));
} else {
    if ((_$t416 !== null)) {
        var _$t416_sc = _ifc_max_(0, _ifc_max_(((((_$t417 instanceof Object))) ? _$t417._sc : _$t417_sc), 0));
    }
};
_ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t416 instanceof Object))) ? _$t416._sc : _$t416_sc)));
if (_$t416) {
    String.prototype.base64Decode = function() {
        _$t419 = typeof Buffer;
        if (((_$t419 instanceof Object) && (_$t419 !== null))) {
            _$t419._sc = _ifc_max_(0, ((((Buffer instanceof Object))) ? Buffer._sc : Buffer_sc));
        } else {
            if ((_$t419 !== null)) {
                var _$t419_sc = _ifc_max_(0, ((((Buffer instanceof Object))) ? Buffer._sc : Buffer_sc));
            }
        };
        _$t418 = (_$t419 != "undefined");
        if (((_$t418 instanceof Object) && (_$t418 !== null))) {
            _$t418._sc = _ifc_max_(0, _ifc_max_(((((_$t419 instanceof Object))) ? _$t419._sc : _$t419_sc), 0));
        } else {
            if ((_$t418 !== null)) {
                var _$t418_sc = _ifc_max_(0, _ifc_max_(((((_$t419 instanceof Object))) ? _$t419._sc : _$t419_sc), 0));
            }
        };
        _ifc_stack_.push(_ifc_max_(_$pc(0), ((((_$t418 instanceof Object))) ? _$t418._sc : _$t418_sc)));
        if (_$t418) {
            if ((((Buffer && (Buffer._sc !== undefined))))) {
                _$t423 = ((((_$pc(0) <= Buffer._sc))) ? Buffer._sc : _$pc(0));
                _ifc_stack_.push(this._sc);
                _ifc_stack_.push(0);
                _ifc_stack_.push(2);
                _ifc_stack_.push(_$t423);
                var _$t422 = new Buffer(this, "base64");
                if ((_$t422 instanceof Object)) {
                    _$t422._sc = _ifc_stack_.pop();
                } else {
                    var _$t422_sc = _ifc_stack_.pop();
                };
            }
             else if (Buffer) {
                var _$t422 = new Buffer(this, "base64");
                if (((_$t422 instanceof Object) && (_$t422 !== null))) {
                    _$t422._sc = _ifc_max_(0, _ifc_max_(0, 0, this._sc));
                } else {
                    if ((_$t422 !== null)) {
                        var _$t422_sc = _ifc_max_(0, _ifc_max_(0, 0, this._sc));
                    }
                };
            }
            
        ;
            if (((((_$t422["toString"] && (_$t422["toString"]._sc !== undefined)))) || ((((_$t422._sc !== undefined) && (((("call" === "toString") || ("apply" === "toString"))))))))) {
                _$t424 = ((((_$pc(0) <= _$t422._sc))) ? _$t422._sc : _$pc(0));
                _ifc_stack_.push(0);
                _ifc_stack_.push(1);
                _ifc_stack_.push(_$t424);
                var _$t420 = _$t422["toString"]("utf8");
                if ((_$t420 instanceof Object)) {
                    _$t420._sc = _ifc_stack_.pop();
                } else {
                    var _$t420_sc = _ifc_stack_.pop();
                };
            }
             else if (_$t422["toString"]) {
                var _$t420 = _$t422["toString"]("utf8");
                if (((_$t420 instanceof Object) && (_$t420 !== null))) {
                    _$t420._sc = _ifc_max_(0, _ifc_max_(0, 0));
                } else {
                    if ((_$t420 !== null)) {
                        var _$t420_sc = _ifc_max_(0, _ifc_max_(0, 0));
                    }
                };
            }
            
        ;
            _$t421 = (_$pc(-1) + 1);
            var old_pc = _ifc_max_(_$pc(0), ((((_$t420 instanceof Object))) ? _$t420._sc : _$t420_sc));
            for (var _ifc_i_ = 0; (_ifc_i_ < _$t421); _ifc_i_++) {
                _ifc_stack_.pop();
            };
            _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
            return _$t420;
        }
    ;
        _ifc_stack_.pop();
        if ((((Error && (Error._sc !== undefined))))) {
            _$t426 = ((((_$pc(0) <= Error._sc))) ? Error._sc : _$pc(0));
            _ifc_stack_.push(0);
            _ifc_stack_.push(1);
            _ifc_stack_.push(_$t426);
            var _$t425 = new Error("No Base64 Decode");
            if ((_$t425 instanceof Object)) {
                _$t425._sc = _ifc_stack_.pop();
            } else {
                var _$t425_sc = _ifc_stack_.pop();
            };
        }
         else if (Error) {
            var _$t425 = new Error("No Base64 Decode");
            if (((_$t425 instanceof Object) && (_$t425 !== null))) {
                _$t425._sc = _ifc_max_(0, _ifc_max_(0, 0));
            } else {
                if ((_$t425 !== null)) {
                    var _$t425_sc = _ifc_max_(0, _ifc_max_(0, 0));
                }
            };
        }
        
    ;
        var old_pc = _ifc_max_(_$pc(0), ((((_$t425 instanceof Object))) ? _$t425._sc : _$t425_sc));
        for (var _ifc_i_ = 0; (_ifc_i_ < 0); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        throw _$t425;
        _$t427 = (_$pc(-1) + 1);
        var old_pc = _$pc(0);
        for (var _ifc_i_ = 0; (_ifc_i_ < _$t427); _ifc_i_++) {
            _ifc_stack_.pop();
        };
        _ifc_stack_[(_ifc_stack_.length - 1)] = _ifc_max_(_$pc(0), old_pc);
        return;
    };
    String["prototype"]["base64Decode"]._sc = 0;
}
;
_ifc_stack_.pop();
if (((((Aes["Ctr"]["encrypt"] && (Aes["Ctr"]["encrypt"]._sc !== undefined)))) || ((((Aes["Ctr"]._sc !== undefined) && (((("call" === "encrypt") || ("apply" === "encrypt"))))))))) {
    _$t428 = ((((_$pc(0) <= Aes["Ctr"]._sc))) ? Aes["Ctr"]._sc : _$pc(0));
    _ifc_stack_.push(0);
    _ifc_stack_.push(0);
    _ifc_stack_.push(0);
    _ifc_stack_.push(3);
    _ifc_stack_.push(_$t428);
    var encr = Aes["Ctr"]["encrypt"]("big secret", "password", 256);
    if ((encr instanceof Object)) {
        encr._sc = _ifc_stack_.pop();
    } else {
        var encr_sc = _ifc_stack_.pop();
    };
}
 else if (Aes["Ctr"]["encrypt"]) {
    var encr = Aes["Ctr"]["encrypt"]("big secret", "password", 256);
    if (((encr instanceof Object) && (encr !== null))) {
        encr._sc = _ifc_max_(0, _ifc_max_(0, 0, 0, 0));
    } else {
        if ((encr !== null)) {
            var encr_sc = _ifc_max_(0, _ifc_max_(0, 0, 0, 0));
        }
    };
}

;
if (((((Aes["Ctr"]["decrypt"] && (Aes["Ctr"]["decrypt"]._sc !== undefined)))) || ((((Aes["Ctr"]._sc !== undefined) && (((("call" === "decrypt") || ("apply" === "decrypt"))))))))) {
    _$t429 = ((((_$pc(0) <= Aes["Ctr"]._sc))) ? Aes["Ctr"]._sc : _$pc(0));
    _ifc_stack_.push(((((encr instanceof Object))) ? encr._sc : encr_sc));
    _ifc_stack_.push(0);
    _ifc_stack_.push(0);
    _ifc_stack_.push(3);
    _ifc_stack_.push(_$t429);
    var decr = Aes["Ctr"]["decrypt"](encr, "p\u0101\u015f\u0161\u0175\u014d\u0159\u0111", 256);
    if ((decr instanceof Object)) {
        decr._sc = _ifc_stack_.pop();
    } else {
        var decr_sc = _ifc_stack_.pop();
    };
}
 else if (Aes["Ctr"]["decrypt"]) {
    var decr = Aes["Ctr"]["decrypt"](encr, "p\u0101\u015f\u0161\u0175\u014d\u0159\u0111", 256);
    if (((decr instanceof Object) && (decr !== null))) {
        decr._sc = _ifc_max_(0, _ifc_max_(0, 0, 0, ((((encr instanceof Object))) ? encr._sc : encr_sc)));
    } else {
        if ((decr !== null)) {
            var decr_sc = _ifc_max_(0, _ifc_max_(0, 0, 0, ((((encr instanceof Object))) ? encr._sc : encr_sc)));
        }
    };
}

;
_$t430 = console.log;
if (((_$t430 instanceof Object) && (_$t430 !== null))) {
    _$t430._sc = _ifc_max_(0, ((((console.log instanceof Object))) ? console.log._sc : console.log_sc));
} else {
    if ((_$t430 !== null)) {
        var _$t430_sc = _ifc_max_(0, ((((console.log instanceof Object))) ? console.log._sc : console.log_sc));
    }
};
var print = (print || _$t430);
if (((print instanceof Object) && (print !== null))) {
    print._sc = _ifc_max_(0, _ifc_max_(((((print instanceof Object))) ? print._sc : print_sc), ((((_$t430 instanceof Object))) ? _$t430._sc : _$t430_sc)));
} else {
    if ((print !== null)) {
        var print_sc = _ifc_max_(0, _ifc_max_(((((print instanceof Object))) ? print._sc : print_sc), ((((_$t430 instanceof Object))) ? _$t430._sc : _$t430_sc)));
    }
};
_$t432 = ("encr output ==\u003E " + encr);
if (((_$t432 instanceof Object) && (_$t432 !== null))) {
    _$t432._sc = _ifc_max_(0, _ifc_max_(0, ((((encr instanceof Object))) ? encr._sc : encr_sc)));
} else {
    if ((_$t432 !== null)) {
        var _$t432_sc = _ifc_max_(0, _ifc_max_(0, ((((encr instanceof Object))) ? encr._sc : encr_sc)));
    }
};
if ((((print && (print._sc !== undefined))))) {
    _$t433 = ((((_$pc(0) <= print._sc))) ? print._sc : _$pc(0));
    _ifc_stack_.push(((((_$t432 instanceof Object))) ? _$t432._sc : _$t432_sc));
    _ifc_stack_.push(1);
    _ifc_stack_.push(_$t433);
    var _$t431 = print(_$t432);
    if ((_$t431 instanceof Object)) {
        _$t431._sc = _ifc_stack_.pop();
    } else {
        var _$t431_sc = _ifc_stack_.pop();
    };
}
 else if (print) {
    var _$t431 = print(_$t432);
    if (((_$t431 instanceof Object) && (_$t431 !== null))) {
        _$t431._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t432 instanceof Object))) ? _$t432._sc : _$t432_sc)));
    } else {
        if ((_$t431 !== null)) {
            var _$t431_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t432 instanceof Object))) ? _$t432._sc : _$t432_sc)));
        }
    };
}

;
_$t435 = ("decr output ==\u003E " + decr);
if (((_$t435 instanceof Object) && (_$t435 !== null))) {
    _$t435._sc = _ifc_max_(0, _ifc_max_(0, ((((decr instanceof Object))) ? decr._sc : decr_sc)));
} else {
    if ((_$t435 !== null)) {
        var _$t435_sc = _ifc_max_(0, _ifc_max_(0, ((((decr instanceof Object))) ? decr._sc : decr_sc)));
    }
};
if ((((print && (print._sc !== undefined))))) {
    _$t436 = ((((_$pc(0) <= print._sc))) ? print._sc : _$pc(0));
    _ifc_stack_.push(((((_$t435 instanceof Object))) ? _$t435._sc : _$t435_sc));
    _ifc_stack_.push(1);
    _ifc_stack_.push(_$t436);
    var _$t434 = print(_$t435);
    if ((_$t434 instanceof Object)) {
        _$t434._sc = _ifc_stack_.pop();
    } else {
        var _$t434_sc = _ifc_stack_.pop();
    };
}
 else if (print) {
    var _$t434 = print(_$t435);
    if (((_$t434 instanceof Object) && (_$t434 !== null))) {
        _$t434._sc = _ifc_max_(0, _ifc_max_(0, ((((_$t435 instanceof Object))) ? _$t435._sc : _$t435_sc)));
    } else {
        if ((_$t434 !== null)) {
            var _$t434_sc = _ifc_max_(0, _ifc_max_(0, ((((_$t435 instanceof Object))) ? _$t435._sc : _$t435_sc)));
        }
    };
}

;