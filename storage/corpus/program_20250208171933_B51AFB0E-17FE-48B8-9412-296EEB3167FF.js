for (let v0 = 0; v0 < 5; v0++) {
    new Uint8Array(64);
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
