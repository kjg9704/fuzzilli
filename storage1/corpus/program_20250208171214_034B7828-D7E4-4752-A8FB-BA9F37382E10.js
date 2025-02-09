class C0 {
}
let v1 = "acosh";
try { C0[v1](); } catch (e) {}
v1 >>>= C0;
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
