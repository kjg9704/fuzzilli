class C0 {
}
const v1 = new C0();
C0.__proto__ = v1;
`268435456${C0}-8262`;
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
