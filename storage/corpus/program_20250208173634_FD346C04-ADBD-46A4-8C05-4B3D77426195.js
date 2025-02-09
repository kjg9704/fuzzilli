let v2 = (1e-301).toString();
const v3 = [-1.2033110328328984,-469476.12294353533,390.1278236397716,424.1948462339267,-1000.0,6.60911371102188,255.13103145804052,-1.0];
[-9.075853973374175,5.950834440526858,-4.0];
const v5 = [3.4388133779488003e+307];
function f6() {
    return v5;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2;
    this.d = f6;
}
class C11 {
    #a;
    constructor(a13, a14, a15) {
        try {
            v2.#a = v3;
        } catch(e16) {
        }
    }
}
const v17 = new C11(v5);
const v18 = v2.constructor;
const v19 = `
    function f20() {
    }
    const v22 = new WeakMap();
    const v23 = v22.get(f20);
    class C24 {
    }
    let v26;
    try { v26 = F7.m(F7, v18, v2, v19, bailout); } catch (e) {}
    v17[f20] = v26;
    new F7(v23, v22);
    const v28 = {};
    let v29 = "OA";
    const v31 = v29--;
    ++v2;
    -49.18492700734896 && v31;
`;
eval(v19);
gc();
