class C1 {
}
const v2 = new C1();
let v3 = -45129n;
for (let i = 0; i < 5; i++) {
    v3 &&= v3;
    v2["536870888"] = 5n;
}
gc();
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
