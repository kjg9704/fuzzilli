const v5 = {
    valueOf(a2, a3) {
        return this != -1.0;
    },
};
try { v5.valueOf(); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 72 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 63 newly discovered edges in the CFG of the target
