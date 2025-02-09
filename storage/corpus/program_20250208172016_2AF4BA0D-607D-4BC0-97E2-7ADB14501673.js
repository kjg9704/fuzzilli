const v0 = [852022736,-20868];
class C1 {
    static 3480475287;
    static 2333 = v0;
}
function f2(a3, a4) {
    return { ...a4, ...C1 };
}
const v6 = f2();
f2(v6, v6);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
