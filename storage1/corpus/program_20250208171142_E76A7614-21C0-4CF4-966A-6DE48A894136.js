let v0 = 1121;
for (let v1 = 0; v1 < 5; v1++) {
    v0 /= v1;
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
