const v1 = new BigUint64Array();
const v5 = new Proxy(v1, {});
v5[2147483648] = 1;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
