class C0 {
}
class C1 extends C0 {
}
Math.sqrt(C1);
Math.trunc(C1);
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
