function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
-12n + F0;
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
