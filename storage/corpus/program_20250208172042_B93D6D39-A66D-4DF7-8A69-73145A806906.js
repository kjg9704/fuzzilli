for (let i = 0; i < 5; i++) {
    const v4 = new ArrayBuffer(45, { maxByteLength: 117 });
    new Float64Array(v4);
}
gc();
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
