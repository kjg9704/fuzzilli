const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
}
const v3 = new F1();
with (v3) {
    try { e(); } catch (e) {}
    F1-- >>> F1;
}
gc();
// Imported program is interesting due to new coverage: 56 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
