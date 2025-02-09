try {
    new WeakMap({});
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
