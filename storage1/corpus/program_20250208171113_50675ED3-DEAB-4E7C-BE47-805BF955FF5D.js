// Minimizing E6FA19D1-F843-484E-BC51-F0CAD2CE6095
Boolean.prop = Boolean;
for (const v1 in Boolean) {
    delete Boolean.prop;
}
class C3 extends Boolean {
}
class C4 extends C3 {
}
function f5(a6, a7, a8, a9) {
    const v11 = new Uint8Array();
    v11.toString = Boolean;
    v11[v11];
    return Boolean;
}
for (let v13 = 0; v13 < 100; v13++) {
    f5(f5, Boolean, C3, Boolean);
}
gc();
// Program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
