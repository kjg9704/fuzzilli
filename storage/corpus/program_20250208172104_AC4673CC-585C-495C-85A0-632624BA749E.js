for (let i = 0; i < 5; i++) {
    new Uint8ClampedArray(3938);
    new Uint8ClampedArray(7);
    new Int32Array(2759);
}
gc();
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
