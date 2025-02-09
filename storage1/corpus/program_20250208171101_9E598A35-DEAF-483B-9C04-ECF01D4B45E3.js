function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
}
class C6 {
    constructor(a8, a9) {
        gc();
    }
}
new C6(-268435456, C6);
new C6(-268435456, F1);
new C6(f5, F1);
-268435456 % f5;
gc();
// Imported program is interesting due to new coverage: 20 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
