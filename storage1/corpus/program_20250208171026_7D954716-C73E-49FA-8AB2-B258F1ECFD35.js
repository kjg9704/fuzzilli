const v3 = Array(4);
4 > -6n;
v3.toSpliced(4, 4);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 66 newly discovered edges in the CFG of the target
