const v0 = [1000000000.0,1000000000000.0,-0.0,-2.0,Infinity];
function f1(a2, a3, a4, a5) {
    const t2 = a5 && a3;
    t2[256] = v0;
    return a4;
}
try { v0.findLastIndex(f1); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
