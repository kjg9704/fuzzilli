class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    return { __proto__: a6 };
}
const v9 = f2(C0, C0, v1, f2(v1, C0, C0, v1));
const v10 = f2(C0, v1, v9, v9);
v10[3] = v10;
gc();
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
