for (let i = 0; i < 5; i++) {
    const v4 = new SharedArrayBuffer(1, { maxByteLength: 479 });
    new Uint8ClampedArray(v4);
}
gc();
// Imported program is interesting due to new coverage: 20 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
