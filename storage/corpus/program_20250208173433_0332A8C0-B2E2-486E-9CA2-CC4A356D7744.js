function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435439;
}
const v5 = new F1(F1, F1);
function f6(a7, a8) {
    return {};
}
const v12 = new Proxy(v5, { defineProperty: f6 });
v12.a = v12;
gc();
