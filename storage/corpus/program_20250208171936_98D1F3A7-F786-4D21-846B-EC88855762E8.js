function f0() {
    return f0;
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.c = f0;
    this.b = a6;
}
const v9 = new F3(F3, F3, F1, F3);
const v12 = {
    a: F3,
    h: F1,
    set b(a11) {
    },
    ...v9,
    g: F3,
};
class C13 {
}
Math.acos(C13);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
