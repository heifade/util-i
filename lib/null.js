define(["require", "exports", "util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isNull(value) {
        return value === null || value === undefined;
    }
    exports.isNull = isNull;
    function isEmpty(value) {
        if (isNull(value)) {
            return true;
        }
        if (util_1.isArray(value)) {
            return value.length === 0;
        }
        if (util_1.isObject(value)) {
            return Object.getOwnPropertyNames(value).length === 0;
        }
        if (util_1.isString(value)) {
            return value === "";
        }
        if (util_1.isNumber(value)) {
            return false;
        }
        return false;
    }
    exports.isEmpty = isEmpty;
});
//# sourceMappingURL=null.js.map