const v2 = new Int8Array(1024);
for (const v3 of v2) {
    try {
        v2.findIndex(v3);
    } catch(e5) {
    }
}
gc();
// Imported program is interesting due to new coverage: 453 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
