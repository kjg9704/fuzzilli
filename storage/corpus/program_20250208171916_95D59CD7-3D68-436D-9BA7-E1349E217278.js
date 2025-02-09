class C1 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new Float64Array(9);
new Float64Array(v10);
F2.__proto__ = C1;
C1.valueOf = 0.16106926571477698;
if (0.16106926571477698 !== 512) {
}
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
