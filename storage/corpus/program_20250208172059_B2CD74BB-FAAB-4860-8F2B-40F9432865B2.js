const v0 = [];
function f1(a2, a3) {
    const v4 = { __proto__: v0 };
    return a3;
}
f1(f1, f1);
Object.defineProperty(v0, "g", { set: f1 });
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
