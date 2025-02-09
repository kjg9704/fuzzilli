function f0() {
}
const v3 = new BigInt64Array(8);
v3.sort(f0);
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
