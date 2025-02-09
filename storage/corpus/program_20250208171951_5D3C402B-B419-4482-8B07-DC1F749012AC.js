class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
try { v2.with(); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 134 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 625 newly discovered edges in the CFG of the target
