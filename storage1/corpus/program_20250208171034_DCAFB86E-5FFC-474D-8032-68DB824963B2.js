const v2 = new Float64Array();
class C3 extends Float64Array {
}
const v4 = new C3();
v2[v4] ^= 1907;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
