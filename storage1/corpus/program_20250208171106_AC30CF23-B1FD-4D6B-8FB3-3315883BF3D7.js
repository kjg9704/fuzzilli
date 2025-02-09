const v4 = new SharedArrayBuffer(16, { maxByteLength: 147 });
const v6 = new Uint32Array(v4);
try {
    v6.every();
} catch(e8) {
}
gc();
// Imported program is interesting due to new coverage: 34 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
