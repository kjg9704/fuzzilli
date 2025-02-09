let v0 = "Djk";
for (let i = 0; i < 10; i++) {
    "boolean" & (v0 += "object");
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
