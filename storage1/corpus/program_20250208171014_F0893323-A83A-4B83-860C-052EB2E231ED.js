const v3 = Array(255);
class C4 extends Array {
    [255] = Array;
}
function f5(a6, a7, a8) {
    const v15 = {
        ...v3,
        [a7]: "CktUG",
        valueOf(a10, a11, a12, a13) {
            return super.toJSON(a8);
        },
    };
    return v15;
}
const v16 = f5();
for (let v17 = 0; v17 < 18; v17++) {
    for (let v18 = 0; v18 < 100; v18++) {
        f5();
    }
    delete v16[f5];
}
f5(C4, "CktUG");
gc();
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1481 newly discovered edges in the CFG of the target
