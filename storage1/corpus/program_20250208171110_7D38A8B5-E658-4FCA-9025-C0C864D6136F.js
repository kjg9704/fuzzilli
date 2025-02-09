function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
let v3;
try { v3 = F0.copyWithin(F0, F0, F0); } catch (e) {}
v3 < v3;
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
