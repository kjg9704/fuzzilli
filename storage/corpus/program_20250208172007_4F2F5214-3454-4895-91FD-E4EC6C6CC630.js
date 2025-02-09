const v2 = new Float64Array(11);
const v4 = [];
Reflect.apply(v2.sort, v2, v4);
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
