class C1 {
    static {
        try {
        const t0 = -1760315913;
        new t0(..."a");
        } catch (e) {}
    }
}
gc();
// Imported program is interesting due to new coverage: 1453 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
