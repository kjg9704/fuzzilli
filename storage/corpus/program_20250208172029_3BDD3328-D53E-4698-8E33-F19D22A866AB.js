const v4 = new Float32Array(2503);
for (const v5 of v4) {
    try {
        new BigUint64Array(-9223372036854775807);
    } catch(e7) {
    }
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
