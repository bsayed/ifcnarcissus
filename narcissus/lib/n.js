if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function() {
    return {
        options: {
            version: 185,
            // Global variables to hide from the interpreter
            hiddenHostGlobals: { Narcissus: true },
            // Desugar SpiderMonkey language extensions?
            desugarExtensions: false,
            // Allow HTML comments?
            allowHTMLComments: false
        },
        hostSupportsEvalConst: (function() {
            try {
                return eval("(function(s) { eval(s); return x })('const x = true;')");
            } catch (e) {
                return false;
            }
        })(),
        hostGlobal: this
    };
});
