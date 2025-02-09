for (let i = 0; i < 5; i++) {
    new Uint32Array({});
}
gc();
// Imported program is interesting due to new coverage: 47 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
