function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -4096;
}
class C3 extends F0 {
    set b(a5) {
    }
}
new C3();
Math.log2(C3);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
