class C0 {
}
function f1(a2, a3, a4) {
    arguments.length &= C0;
    return a2;
}
f1();
gc();
// Imported program is interesting due to new coverage: 39 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
