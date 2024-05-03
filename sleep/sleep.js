/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sleep(millis) {
    return __awaiter(this, void 0, void 0, function* () {
        //await new Promise((resolve) => setTimeout(resolve, millis)); or
        return new Promise((resolve) => {
            setTimeout(resolve, millis);
        });
    });
}
let start = Date.now();
sleep(1000).then(() => {
    console.log(Date.now() - start);
});
//# sourceMappingURL=sleep.js.map