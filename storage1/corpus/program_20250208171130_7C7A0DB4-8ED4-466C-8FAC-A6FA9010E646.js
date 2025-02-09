const v1 = [44600,44600,44600,44600];
const v2 = [44600];
v2.slice(44600, -9223372036854775808);
const v5 = { __proto__: v2 };
gc();
v2.__proto__ = v1;
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
