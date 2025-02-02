function argumentsLength() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var count = 0;
    for (var i = 0; i < args.length; i++) {
        count++;
    }
    return count;
}
;
/**
 * argumentsLength(1, 2, 3); // 3
 */ 
