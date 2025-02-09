const v0 = /M?/mgusy;
for (let v1 = 0; v1 < 5; v1++) {
    v0["exec"]();
}
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
