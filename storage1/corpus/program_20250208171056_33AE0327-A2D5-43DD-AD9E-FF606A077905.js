function f2(a3) {
    return f2;
}
try { f2(WeakMap, WeakMap, ...-63448n); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
