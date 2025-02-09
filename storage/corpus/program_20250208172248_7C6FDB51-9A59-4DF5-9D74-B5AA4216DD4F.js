function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 16;
    this.b = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v4];
const v7 = [v6,v5,v4,v4,v6];
const v8 = [v5,F0];
const v11 = new Uint16Array(3586);
const v14 = new Uint8Array(1112);
new Int16Array(1);
const v18 = new Uint16Array(v11, 3586, 1);
for (let v19 = 0; v19 < 32; v19++) {
    v4["p" + v19] = v19;
}
function f22(a23, a24) {
    function f25() {
        new ArrayBuffer(8, {});
        return arguments;
    }
    f25(a24, a24);
    const v34 = new Uint16Array(3541);
    new Int8Array(v34);
    v8[f25()] = v11;
    const v38 = [1073741824,-4294967297,-13];
    const v39 = [-4,-2];
    v39.includes(undefined, v38.length);
    return a23;
}
function f43(a44, a45, a46, a47) {
    const t33 = [3.0,0.7365695335866591,-3.0];
    t33.length = 12;
    const v50 = {};
    v3[12];
    Symbol.search;
    for (let v54 = 0; v54 < 76; v54++) {
        const t39 = {};
        t39.g = v4;
        const v56 = {};
        v56.g = v4;
        v56.a = v5;
        const v57 = {};
        v57.g = v4;
        v57.a = v5;
        v57.h = v18;
        const v58 = {};
        v58.g = v4;
        v58.a = v5;
        v58.f = a44;
    }
    return v14;
}
class C59 {
}
const v62 = new Set();
let v63;
try { v63 = v62.entries(); } catch (e) {}
const t60 = "symbol";
t60.length = v63;
for (let v64 = 0; v64 < 100; v64++) {
    f22(v64, v7);
}
for (let v66 = 0; v66 < 100; v66++) {
    f43(1112, v6, 1112, v8);
}
class C68 extends Uint8Array {
    static b;
    static d;
}
const v69 = new C68();
new C68();
const v71 = new C68();
f43(1, v71, 1, v6);
f22(1, v63);
for (let v74 = 0; v74 < 100; v74++) {
    f22(v74, v6);
}
for (let v76 = 0; v76 < 100; v76++) {
    f43(v76, C59, v76, v6);
}
const t83 = "symbol";
delete t83?.length;
new C68();
"isSealed" == gc();
f43(3586, v69, f22(3586, v7), v8);
gc();
