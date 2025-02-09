class C1 extends Map {
}
const v2 = new C1();
v2.set(delete C1[5]);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
