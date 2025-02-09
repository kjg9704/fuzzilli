function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
    valueOf(a4, a5, a6) {
        F0 ^ a4;
    }
}
const v8 = new C2();
function f9() {
    return f9;
}
new Int32Array([C2,f9,F0,v8]);
gc();
