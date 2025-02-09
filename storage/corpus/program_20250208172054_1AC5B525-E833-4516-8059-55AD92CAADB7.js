function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
("16").includes(-5n, F1);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
