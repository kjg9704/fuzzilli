function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -264457006;
}
const v3 = new F0();
with (v3) {
    f--;
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
