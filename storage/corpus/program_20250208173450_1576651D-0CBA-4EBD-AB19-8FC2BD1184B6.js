function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
    static #b = F0;
}
let v3 = 7n;
v3 = -65535n;
Symbol.unscopables;
Math.sign();
function f9(a10, a11, a12, a13) {
    const v14 = [];
    for (let v15 = 0; v15 < 100; v15++) {
        if (v15 == 94) {
            v14[1073741824] ??= 94;
        }
    }
}
function f18(a19, a20) {
    new Int8Array();
    for (let v24 = 0; v24 < 32; v24++) {
        Math["p" + v24] = v24;
    }
    class C27 {
    }
    WeakMap = C2;
}
let v29 = [1073741823,-5,1215796805,14704,-2,9,24939,7,4294967297,64];
const v31 = new Map();
({"h":v29,"size":Map,} = v31);
f9();
for (let v33 = 0; v33 < 100; v33++) {
    f18();
}
f9();
for (let v36 = 0; v36 < 100; v36++) {
    f18();
}
gc();
