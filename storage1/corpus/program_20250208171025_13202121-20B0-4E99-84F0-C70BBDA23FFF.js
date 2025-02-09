function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
Array.isArray(F1);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
