function f0() {
    const v7 = {
        e: 1073741824,
        499871692: 1073741824,
        toString(a5, a6) {
        },
        ..."function",
        a: 1073741824,
        c: "function",
        h: -14,
    };
    return v7;
}
const v8 = f0();
const v9 = { ...v8 };
for (let v10 = 0; v10 < 59; v10++) {
    f0();
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 22 newly discovered edges in the CFG of the target
