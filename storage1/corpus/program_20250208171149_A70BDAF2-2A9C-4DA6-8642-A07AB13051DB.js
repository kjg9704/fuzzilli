function f0() {
    const v7 = {
        e: 65537,
        f: 4.0,
        __proto__: "flags",
        d: 65537,
        ["flags"](a5, a6) {
        },
    };
    return v7;
}
const v8 = f0();
const v11 = new Int16Array(1000);
let v12 = f0[v11];
try { v11.filter(v12); } catch (e) {}
for (const v14 in v8) {
}
v12 += v11;
gc();
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
