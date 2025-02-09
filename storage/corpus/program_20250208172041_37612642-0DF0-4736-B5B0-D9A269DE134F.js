const v2 = new Int16Array(3, 3, 3);
({ __proto__: v2, 2147483649: 3 })[1073741824];
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 32 newly discovered edges in the CFG of the target
