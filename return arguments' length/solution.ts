type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let count = 0
    for (let i = 0; i < args.length; i++){
        count++
    }
    //could also use args.length instead of using loop
    return count
};

/**
 * argumentsLength(1, 2, 3); // 3
 */