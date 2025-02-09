const v0 = [-4.0,1000000000000.0,0.0,-855616.5394140716,3.0,-938.7023963233958];
const v1 = { __proto__: v0 };
for (let v2 = 0; v2 < 10; v2++) {
    v1["p" + v2] = v2;
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 42 newly discovered edges in the CFG of the target
