const v1 = /br[\cA]?/mu;
for (let i = 0; i < 5; i++) {
    ("flags").match(v1);
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
