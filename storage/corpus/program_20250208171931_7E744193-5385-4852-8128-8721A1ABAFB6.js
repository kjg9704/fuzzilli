function f1() {
    return -1000000.0;
}
new Int8Array(256);
async function* f5(a6, a7) {
    function f8() {
        return a7;
    }
    await -1000000.0;
    yield a7;
}
f5();
gc();
// Imported program is interesting due to new coverage: 98 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 125 newly discovered edges in the CFG of the target
