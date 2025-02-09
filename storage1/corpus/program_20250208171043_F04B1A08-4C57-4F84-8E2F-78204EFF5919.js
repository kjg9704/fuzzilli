function f0() {
    return f0;
}
const v5 = new SharedArrayBuffer(444, { maxByteLength: 444 });
const v7 = new Int8Array(v5);
[f0,...v7];
gc();
// Imported program is interesting due to new coverage: 84 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 106 newly discovered edges in the CFG of the target
