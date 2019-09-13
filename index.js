class TemplateClass {
    constructor() {

    }

    someMethod() {
        return 'some return';
    }
}

var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = TemplateClass;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return TemplateClass;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = TemplateClass;
} else {
    window[exportName] = TemplateClass;
}
