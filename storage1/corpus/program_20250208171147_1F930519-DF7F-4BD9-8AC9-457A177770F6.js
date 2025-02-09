function f0() {
    return f0;
}
const v3 = new SharedArrayBuffer(2);
const v5 = new Uint16Array(v3);
v5.findIndex(f0);
gc();
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
