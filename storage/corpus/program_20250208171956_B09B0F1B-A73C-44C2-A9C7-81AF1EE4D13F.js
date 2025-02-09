function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0--;
Math.cbrt(F0);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
