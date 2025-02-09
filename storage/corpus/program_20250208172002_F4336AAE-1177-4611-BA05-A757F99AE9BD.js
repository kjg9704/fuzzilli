for (let i = 0; i < 5; i++) {
    const v4 = new SharedArrayBuffer(4096, { maxByteLength: 4096 });
    new Int32Array(v4);
}
gc();
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
