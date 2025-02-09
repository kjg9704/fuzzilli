for (let i = 0; i < 5; i++) {
    new Float64Array(255);
    new Int8Array(4);
}
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
