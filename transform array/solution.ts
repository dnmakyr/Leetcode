function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let mappedArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(fn(arr[i], i));
    }
    return mappedArr;
};

//testing
let arr = [1, 2, 3, 4, 5];
let mappedArr = map(arr, (n, i) => n + i);
console.log(mappedArr); // [1, 3, 5, 7, 9]