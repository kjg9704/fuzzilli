for (let v1 = 0; v1 < 10; v1++) {
    this["p" + v1] = v1;
}
gc();
// Imported program is interesting due to new coverage: 53 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 62 newly discovered edges in the CFG of the target
