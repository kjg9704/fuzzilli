let v1 = -1000.0;
const v4 = new Float64Array(128);
v4.with(-128, -128);
v1 **= 2.0;
v4["lastIndexOf"]();
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 72 newly discovered edges in the CFG of the target
