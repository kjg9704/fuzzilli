const v2 = new Int8Array(10);
v2.indexOf(-2147483648);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
