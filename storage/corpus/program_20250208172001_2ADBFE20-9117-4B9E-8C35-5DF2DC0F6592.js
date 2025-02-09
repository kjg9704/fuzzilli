for (let v1 = 0; v1 < 250; v1++) {
    const t1 = "valueOf";
    t1["p"] = v1;
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
