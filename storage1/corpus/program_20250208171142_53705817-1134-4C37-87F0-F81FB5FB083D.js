function f0(a1, a2, a3) {
    arguments[9];
    return f0;
}
f0();
gc();
// Imported program is interesting due to new coverage: 45 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
