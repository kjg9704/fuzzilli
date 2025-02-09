// Minimizing C6690831-1403-4062-B969-8089A30CE0B1
const t1 = Intl.Segmenter;
new t1();
class C4 {
}
let v5 = new C4();
const v9 = new Int16Array(171);
const v11 = new Int32Array();
[Int32Array,C4] = v9;
function f13(a14, a15) {
    try { Map(); } catch (e) {}
    function F19() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v21 = [];
    function f22(a23) {
    }
    Object.defineProperty(v21, 3, { configurable: true, enumerable: true, set: f22 });
    v21[3] = 8;
    async function f24(a25, a26) {
        function f27() {
        }
        function f28(a29) {
            const v30 = Int32Array ^ undefined;
            const t24 = {};
            t24.g = a29;
            const v32 = {};
            v32.c = v30;
            v32.h = a25;
        }
        Object.defineProperty(f27, "then", { configurable: true, enumerable: true, value: f28 });
        return await f27;
    }
    f24();
}
for (let v35 = 0; v35 < 50; v35++) {
    f13(v35);
}
function f37(a38, a39, a40, a41) {
}
f13(Math, Intl);
for (let v43 = 0; v43 < 100; v43++) {
    f13(v43, v11);
}
++v5;
328449041 + 328449041;
f13();
gc();
// Program is interesting due to new coverage: 91 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 98 newly discovered edges in the CFG of the target
