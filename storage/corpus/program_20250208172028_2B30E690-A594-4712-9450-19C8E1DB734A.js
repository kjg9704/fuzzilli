class C1 extends Array {
}
new C1();
new C1();
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
