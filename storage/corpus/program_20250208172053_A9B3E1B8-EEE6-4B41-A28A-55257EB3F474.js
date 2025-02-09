const v2 = new BigInt64Array(142);
class C3 {
}
const v4 = new C3();
let v5;
try { v5 = v4(...v2); } catch (e) {}
void (v5 = C3);
Math.hypot(C3);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 164 newly discovered edges in the CFG of the target
