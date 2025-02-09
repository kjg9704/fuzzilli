class C3 {
    [701110043] = 8;
}
const v4 = new C3();
function f8(a9, a10, a11) {
    const v13 = {
        d: v4,
        e: -1647706946,
        ...a10,
        ...a10,
        c: -1.0,
        f: -3,
        get g() {
            return 8;
        },
    };
    return v13;
}
f8(-1647706946, f8(-990744114, v4));
const v18 = new Proxy(f8, {});
new v18(-256, {});
gc();
// Imported program is interesting due to new coverage: 29 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 100 newly discovered edges in the CFG of the target
