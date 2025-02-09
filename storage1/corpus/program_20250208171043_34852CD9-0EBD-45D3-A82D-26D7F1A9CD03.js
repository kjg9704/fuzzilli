for (let i = 0; i < 5; i++) {
    const v4 = new ArrayBuffer(235, { maxByteLength: 3508 });
    new Uint32Array(v4);
}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
