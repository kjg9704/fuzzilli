function f0() {
    return f0;
}
const v1 = [-26803,-46502];
class C2 extends f0 {
    127 = v1;
}
const v3 = new C2();
Object.defineProperty(v3, 8, { configurable: true, set: f0 });
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
