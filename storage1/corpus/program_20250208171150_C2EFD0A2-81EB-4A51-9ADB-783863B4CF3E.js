class C1 extends Map {
}
const v2 = new C1();
for (let i = 0; i < 5; i++) {
    v2.delete(Map);
}
gc();
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
