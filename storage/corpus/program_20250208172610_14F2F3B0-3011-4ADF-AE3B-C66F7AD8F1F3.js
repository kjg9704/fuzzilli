function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a5.constructor;
    try { new v7(F3); } catch (e) {}
}
new F3(F3, -20232n);
const v10 = new F3(-36396n, -20232n);
new F3(v10, -4096n);
const v15 = ("ERRB").localeCompare("ERRB", "bigint");
function f16(a17, a18, a19, a20) {
    class C21 {
    }
    C21.bind("bigint");
    return a20;
}
for (let v23 = 0; v23 < 5; v23++) {
    f16(-1212910958, v15);
}
([]).pop();
function f27() {
    return f27;
}
f27.apply(f16, F3);
gc();
