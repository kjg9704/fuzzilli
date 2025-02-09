class C1 {
}
let v2;
try { v2 = C1(); } catch (e) {}
1024n <= v2;
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
