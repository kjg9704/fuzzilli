function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
Math.imul(F0 ^ F0, 1);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
