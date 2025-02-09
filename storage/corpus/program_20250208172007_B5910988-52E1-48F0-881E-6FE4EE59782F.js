const v3 = new Int32Array(3300);
Object.defineProperty(v3, 4, { enumerable: true, value: "536870887" });
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
