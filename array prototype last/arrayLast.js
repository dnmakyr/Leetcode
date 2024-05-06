"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
console.log([1, 2, 3].last());
//# sourceMappingURL=arrayLast.js.map