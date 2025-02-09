function f0(a1, a2) {
    a1(a1, a2, f0, a2);
    return a1;
}
new Promise(f0);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 41 newly discovered edges in the CFG of the target
