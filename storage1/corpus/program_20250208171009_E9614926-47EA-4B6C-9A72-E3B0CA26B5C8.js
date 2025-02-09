for (let v0 = 0; v0 < 5; v0++) {
    new BigUint64Array(10);
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 21 newly discovered edges in the CFG of the target
