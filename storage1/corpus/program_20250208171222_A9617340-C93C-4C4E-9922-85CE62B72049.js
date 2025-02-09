const v0 = {};
function f1(a2) {
    return a2;
}
++f1;
f1 + v0;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
