function f0() {
}
[,,f0];
[f0];
for (let v5 = 0; v5 < 1000; v5++) {
    Int8Array["p"] = v5;
}
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
