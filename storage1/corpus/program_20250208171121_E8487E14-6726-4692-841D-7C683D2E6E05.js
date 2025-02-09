try { Map(1, ...65537); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
