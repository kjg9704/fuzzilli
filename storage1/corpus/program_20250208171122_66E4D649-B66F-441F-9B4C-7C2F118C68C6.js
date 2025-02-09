const v1 = new WeakSet();
const t1 = { __proto__: v1 };
t1[4] &= 6.522330592420103e+307;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
