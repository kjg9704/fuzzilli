const v3 = new Uint32Array(1);
const v6 = new Float32Array(2);
for (const v7 of v6) {
    try {
        new Float32Array(-17539);
    } catch(e9) {
    }
}
new Float32Array(v3);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 60 newly discovered edges in the CFG of the target
