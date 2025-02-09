for (let i = 0; i < 5; i++) {
    try {
        new Float64Array(-48165);
    } catch(e3) {
    }
}
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
