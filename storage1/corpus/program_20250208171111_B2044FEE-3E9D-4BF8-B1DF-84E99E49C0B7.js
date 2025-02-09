const v2 = new Float32Array(1);
for (const v4 of v2) {
    try {
        eval("boolean");
    } catch(e7) {
    }
}
gc();
// Imported program is interesting due to new coverage: 173 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 25 newly discovered edges in the CFG of the target
