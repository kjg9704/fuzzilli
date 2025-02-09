for (let i = 0; i < 5; i++) {
    new Uint8Array(2505);
    new BigUint64Array(22);
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
