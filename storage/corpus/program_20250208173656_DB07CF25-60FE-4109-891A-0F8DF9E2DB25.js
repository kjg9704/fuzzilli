function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
}
class C6 extends f3 {
    static [F0];
}
const v7 = new C6();
function f8(a9, a10, a11, a12) {
    const v13 = [1,7,4096];
    try {
        v13.toLocaleString("p");
    } catch(e16) {
    }
}
function f17(a18, a19, a20) {
    const v25 = new SharedArrayBuffer(1024, { maxByteLength: 1386 });
    new Int16Array(v25);
}
class C29 {
}
const v33 = new Int16Array(171);
[Int32Array,C29] = v33;
Int32Array ^ undefined;
for (let v35 = 0; v35 < 100; v35++) {
    f8(Int32Array, Int32Array, v2, C29);
}
for (let v37 = 0; v37 < 25; v37++) {
    f17(v7, "4797", v2);
}
gc();
