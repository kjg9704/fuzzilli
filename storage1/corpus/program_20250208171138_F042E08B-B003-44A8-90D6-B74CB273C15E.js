const v2 = new Int16Array(8);
for (let i = 0; i < 5; i++) {
    new Int16Array(v2);
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
