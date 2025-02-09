function f2(a3, a4, a5, a6) {
    const v9 = {
        ...a5,
        [-3.408839749276763e+307]: -3.408839749276763e+307,
        set a(a8) {
        },
    };
    return v9;
}
const v10 = f2(-23934.736542743398, -3.408839749276763e+307, -23934.736542743398, -3.408839749276763e+307);
f2();
f2(-23934.736542743398, -23934.736542743398, v10);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
