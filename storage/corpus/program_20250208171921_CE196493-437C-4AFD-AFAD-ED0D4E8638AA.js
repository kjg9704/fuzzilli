class C0 {
}
const v3 = new Int16Array();
const v4 = C0[2147483647];
try { new v4(BigUint64Array, ...v3); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
