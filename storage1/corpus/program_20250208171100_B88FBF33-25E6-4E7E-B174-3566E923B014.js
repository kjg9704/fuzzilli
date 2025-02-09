class C2 {
    [128];
}
const v3 = new C2();
v3[4] ||= -1.7976931348623157e+308;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
