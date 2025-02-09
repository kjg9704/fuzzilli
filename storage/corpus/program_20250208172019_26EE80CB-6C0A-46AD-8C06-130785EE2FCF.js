function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    arguments[arguments] = F0;
    return f2;
}
f2(f2, f2);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
