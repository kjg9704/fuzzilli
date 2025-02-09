for (let i = 0; i < 5; i++) {
    new BigInt64Array(7);
    new Int8Array(512);
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
