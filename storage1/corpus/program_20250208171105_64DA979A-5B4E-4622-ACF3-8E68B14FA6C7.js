function f1(a2, a3, a4, a5) {
    const v7 = {
        get g() {
            return a2;
        },
        g: -12,
    };
    return v7;
}
const v10 = new Float64Array(3581);
v10.every(f1);
gc();
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
