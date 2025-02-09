try {
    new Uint8ClampedArray(-9223372036854775808);
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
