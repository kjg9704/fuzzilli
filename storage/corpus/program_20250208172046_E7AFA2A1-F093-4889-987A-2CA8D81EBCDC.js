const v3 = new Int16Array(255);
const v6 = new Proxy(v3, {});
v6[6] += -4294967295;
gc();
// Imported program is interesting due to new coverage: 49 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 39 newly discovered edges in the CFG of the target
