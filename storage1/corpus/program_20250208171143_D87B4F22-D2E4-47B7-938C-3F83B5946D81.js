function f3() {
    return f3;
}
try { Int32Array.keys(f3, 65, ...1); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
