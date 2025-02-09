function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Math.atan2(-2147483649, -2147483649);
Math.sqrt(-2147483649);
16 ** F0;
gc();
// Imported program is interesting due to new coverage: 20 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
