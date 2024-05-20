"use strict";
function expect(val) {
    return {
        toBe: function (val1) {
            if (val === val1) {
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val1) {
            if (val !== val1) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        },
    };
}
// Example usage:
try {
    expect(5).toBe(5); // Should return true
    console.log("Test passed");
}
catch (e) {
    console.log("Test failed:", e.message);
}
try {
    expect(5).notToBe(4); // Should return true
    console.log("Test passed");
}
catch (e) {
    console.log("Test failed:", e.message);
}
try {
    expect(5).toBe(4); // Should throw an error
    console.log("Test passed");
}
catch (e) {
    console.log("Test failed:", e.message);
}
try {
    expect(5).notToBe(5); // Should throw an error
    console.log("Test passed");
}
catch (e) {
    console.log("Test failed:", e.message);
}
