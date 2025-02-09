function f0() {
}
const v1 = [-Infinity,1000000000.0,2.220446049250313e-16,-2.220446049250313e-16,5.742888475257253e+307,-Infinity,1.0,571633.1959031483];
const v2 = [-543.5489448080908,-5.0,4.295993051318849];
class C3 extends f0 {
    m(a5, a6, a7, a8) {
    }
}
const v9 = new C3();
class C10 {
    #h = f0;
}
const v11 = new C10();
function f12(a13, a14, a15, a16) {
    let v17 = 6;
    const v18 = ++v17;
    typeof a15 === "bigint";
    const v22 = [];
    const v23 = v22.every;
    let v24;
    try { v24 = v23(v22, v23, v23, v23); } catch (e) {}
    function f25() {
        let v27 = 457715.8512407432;
        --v27;
        arguments[v27];
    }
    f25(v18, v24);
}
for (let v31 = 0; v31 < 25; v31++) {
    f12(v9, v11, v11, v2);
}
const v35 = new Proxy(v11, {});
f12(v11, C3, v35, v1);
gc();
