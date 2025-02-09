function f0() {
    return f0;
}
("b").search(f0);
gc();
// Imported program is interesting due to new coverage: 282 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
