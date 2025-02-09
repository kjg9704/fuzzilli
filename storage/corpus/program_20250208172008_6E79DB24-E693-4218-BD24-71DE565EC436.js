function f0(a1, a2) {
    return f0;
}
new String([String,f0 + f0]);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
