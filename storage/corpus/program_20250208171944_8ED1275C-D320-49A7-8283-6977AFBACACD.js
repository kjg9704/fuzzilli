class C3 {
}
let [v4,v5,,v6] = "f";
try { v6(); } catch (e) {}
function f8(a9, a10, a11, a12) {
    try {
        new WeakSet(a11);
    } catch(e14) {
    }
    return "f";
}
f8(4294967297n, v4, C3);
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
