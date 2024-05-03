async function sleep(millis: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, millis);
    });
}
let start = Date.now();
sleep(1000).then(() => {
    console.log(Date.now() - start);
});
