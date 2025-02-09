function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483648;
}
function f4(a5, a6) {
    try { a6(); } catch (e) {}
    return f4;
}
f4(97, F0);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
