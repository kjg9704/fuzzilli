function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new Proxy(F0, {});
class C6 extends v5 {
}
new C6();
gc();
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
