function f0() {
}
function f1() {
    return f0;
}
function f5(a6, a7, a8, a9) {
    const v12 = {
        get b() {
            const t0 = super.h;
            t0[a9] >>= -65535;
            return -49294;
        },
        256: a9,
    };
    return a7;
}
const v13 = f5();
f5.g /= -49294;
const v14 = [0.0,0.5573665192056886,-409304.32757136854,0.0,-5.600144395010638,5.013506094856556e+307,1.0,-19274.68411571125,-2.0];
const v15 = [0.6987644783247644,-513865.74179325375,-2.2250738585072014e-308,0.9552570361346322,-385627.0003574282,-1.421390564603528e+308,2.220446049250313e-16,3.7158894962030793,-1e-15];
f1 >> v13;
f5[f0(...v14, v13, ...v15)] = WeakSet;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
