const v0 = /a??/mvdy;
with (7) {
    try { v0(); } catch (e) {}
}
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
