const v2 = new Float32Array();
try {
    v2.every(-2);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
