const v1 = { a: "number" };
for (let v3 = 0; v3 < 5; v3++) {
    v1.a += 1003341770;
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
