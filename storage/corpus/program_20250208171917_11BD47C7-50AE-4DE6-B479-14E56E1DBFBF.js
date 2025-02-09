class C1 extends WeakSet {
}
const v2 = new C1();
v2.has();
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
