type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(val1: any) {
      if (val !== val1) throw new Error("Not Equal");
      return true;
    },
    notToBe(val1: any) {
      if (val === val1) throw new Error("Equal");
      return true;
    },
  };
}

// Example usage:
try {
  expect(5).toBe(5); // Should return true
  console.log("Test passed");
} catch (e: any) {
  console.log("Test failed:", e.message);
}

try {
  expect(5).notToBe(4); // Should return true
  console.log("Test passed");
} catch (e: any) {
  console.log("Test failed:", e.message);
}

try {
  expect(5).toBe(4); // Should throw an error
  console.log("Test passed");
} catch (e: any) {
  console.log("Test failed:", e.message);
}

try {
  expect(5).notToBe(5); // Should throw an error
  console.log("Test passed");
} catch (e: any) {
  console.log("Test failed:", e.message);
}
