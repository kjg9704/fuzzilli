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
new Uint16Array(v11, 3586, 1);
for (let v19 = 0; v19 < 32; v19++) {
    v4["p" + v19] = v19;
}
function f22(a23, a24) {
    function f25() {
        new ArrayBuffer(8, { maxByteLength: 255 });
        return arguments;
    }
    f25(a24, a24);
    const v35 = new Uint16Array(3541);
    new Int8Array(v35);
    v8[f25()] = v11;
    const v39 = [1073741824,-4294967297,-13];
    const v40 = [-4,-2];
    v40.includes(undefined, v39.length);
    return a23;
}
function f44(a45, a46, a47, a48) {
    const t33 = [3.0,0.7365695335866591,-3.0];
    t33.length = 12;
    const v51 = {};
    v3[v3];
    Symbol.search;
    for (let v55 = 0; v55 < 76; v55++) {
        const t39 = {};
        t39.g = v4;
        const v57 = {};
        v57.g = v4;
        v57.a = v5;
        const v58 = {};
        v58.g = v4;
        v58.a = v5;
        v58.h = a47;
        const v59 = {};
        v59.g = v4;
        v59.a = v5;
        v59.f = v5;
    }
    return v14;
}
class C60 {
}
const v63 = new Set();
const v64 = v63.entries();
const t59 = "symbol";
t59.length = v64;
for (let v65 = 0; v65 < 100; v65++) {
    f22(v65, v7);
}
for (let v67 = 0; v67 < 100; v67++) {
    f44(1112, v6, 1112, v8);
}
class C69 extends Uint8Array {
    static b;
    static d;
}
const v70 = new C69();
new C69();
const v72 = new C69();
f44(1, v72, 1, v6);
f22(1, v64);
for (let v75 = 0; v75 < 100; v75++) {
    f22(v75, v6);
}
for (let v77 = 0; v77 < 100; v77++) {
    f44(v77, C60, v77, v6);
}
const t82 = "symbol";
delete t82.length;
new C69();
"isSealed" == gc();
f44(3586, v70, f22(3586, v7), v8);
gc();
