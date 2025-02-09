function f3() {
    return 58324n;
}
const v7 = new Float32Array(512);
try {
    v7.map(f3);
} catch(e9) {
}
if (Uint8Array) {
} else {
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
