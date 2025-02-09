const v2 = new Float64Array();
const v5 = new BigInt64Array(83);
const v7 = [Array];
Reflect.apply(v2.sort, v5, v7);
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 118 newly discovered edges in the CFG of the target
