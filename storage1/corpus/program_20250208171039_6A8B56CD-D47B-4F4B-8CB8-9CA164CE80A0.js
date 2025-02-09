function f0() {
    return { ..."yTSw" };
}
[f0];
const v6 = new Proxy(f0, {});
v6();
f0[f0];
for (let v9 = 0; v9 < 25; v9++) {
}
gc();
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
