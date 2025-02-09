// Minimizing C0B38184-89DD-4CE0-B39A-B519DC9D2F27
function TestTableSetAndGetFunction() {
    WebAssembly.Function;
    const v3 = [];
    const v4 = [];
    const v5 = { parameters: v3, results: v4 };
    const v6 = (a7) => {
        return a7;
    };
    let func = v6;
    const v9 = WebAssembly.Table;
    if (!v9) {
        WebAssembly ^ v5;
        let v15 = -v5;
        --v15;
    }
    const v18 = new v9({ element: "anyfunc", initial: 1 });
    v18.get(0);
}
TestTableSetAndGetFunction();
for (let i = 0; i < 10; i++) {
    function f24() {
    }
    const v25 = f24();
    const v26 = f24();
    const v27 = f24();
    class C29 {
        n(a31) {
            [this,/(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\11/dyg,v27,false,v26];
        }
        static [v25];
    }
    const v34 = new C29();
    class C35 {
        constructor(a37, a38) {
        }
        #m(a40, a41) {
        }
    }
    new C35(v34);
}
const v44 = new Int16Array();
const v47 = new Uint8Array(2);
let v48 = 1633;
new BigUint64Array(v48);
const v51 = [-7.757663200435399,573873.1659886334,-19654.797368922504];
const v52 = [1000000.0,-8.228668493097701e+307,-5.0,-2.0,-2.220446049250313e-16,8.266281210353355];
const v53 = [-1000.0,-316656.8851346314,1000000000000.0,7.334485624159669,0.04242148202282825,2.2250738585072014e-308,-1.160620937169351e+308,0.6198124647357721,NaN];
v48 ^= 2;
for (let i = 0; i < 5; i++) {
    const v58 = new ArrayBuffer(14, { maxByteLength: 1000 });
    new BigUint64Array(v58);
}
function f60(a61, a62) {
    -2147483647 - /a\bc/mdv;
    const v69 = new Int32Array(160);
    v69[64] >>>= 160;
    new Int16Array(8);
    v69.length += 2;
    new BigUint64Array();
    function f75() {
    }
    v69.findLast(f75, v52);
    v47.byteOffset *= 2;
    Math.log10();
}
function f80(a81, a82, a83, a84) {
    new Proxy(Uint8Array, {});
    const t68 = /S[\xe2\x81\xa3]K+/iv;
    t68[/a\fb\nc\rd\te\vf](ab|cde)+/syig] ||= -3.0;
    class C92 extends Array {
    }
    new C92();
}
const v98 = ("0")[-4294967297n];
v44.toString = TestTableSetAndGetFunction;
for (let v99 = 0; v99 < 100; v99++) {
    f60(v99, v99);
}
for (let v101 = 0; v101 < 100; v101++) {
    f80(v52, v52, v52, v53);
}
function F103(a105, a106, a107, a108) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = TestTableSetAndGetFunction;
}
new F103(v98, v51);
new F103(64, v98);
new F103(v48, v51, v52, v47);
f60(64, 2);
for (let v113 = 0; v113 < 100; v113++) {
}
f80(v98, v52, v51, v98);
gc();
// Program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 476 newly discovered edges in the CFG of the target
