const v2 = new Float32Array(205);
const v4 = new Int16Array();
for (const v5 of v2) {
    try { v4.findLastIndex(); } catch (e) {}
}
gc();
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 135 newly discovered edges in the CFG of the target
