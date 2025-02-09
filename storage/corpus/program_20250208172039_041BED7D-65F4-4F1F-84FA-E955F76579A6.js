for (const v1 in "imul") {
    gc();
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
