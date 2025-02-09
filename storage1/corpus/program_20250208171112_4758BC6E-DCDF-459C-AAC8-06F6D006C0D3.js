with (Uint16Array) {
    try {
        Uint32Array.reduce();
    } catch(e3) {
    }
}
gc();
// Imported program is interesting due to new coverage: 95 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
