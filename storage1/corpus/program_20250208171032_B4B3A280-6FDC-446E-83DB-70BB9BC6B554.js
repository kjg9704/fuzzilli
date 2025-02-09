// Minimizing 60D5F69D-1341-4B76-A9DD-8C3AC4E15C95
function TestTableSetAndGetFunction() {
    const v2 = WebAssembly.Function;
    const v3 = [];
    const v4 = [];
    const v5 = { parameters: v3, results: v4 };
    const v6 = (a7) => {
        return a7;
    };
    const v8 = new v2(v5, v6);
    let func = v8;
    const v10 = WebAssembly.Table;
    const v14 = new v10({ element: "anyfunc", initial: 1 });
    let table = v14;
    table.set(0, func);
    table.get(0);
}
TestTableSetAndGetFunction();
const v23 = new Int16Array(64);
const v26 = new Uint8Array(2);
let v27 = 1633;
const v29 = new BigUint64Array(v27);
const v30 = [-7.757663200435399,573873.1659886334,-19654.797368922504];
const v31 = [1000000.0,-8.228668493097701e+307,-5.0,-2.0,-2.220446049250313e-16,8.266281210353355];
const v32 = [-1000.0,-316656.8851346314,1000000000000.0,7.334485624159669,0.04242148202282825,2.2250738585072014e-308,-1.160620937169351e+308,0.6198124647357721,NaN];
v27 ^= 2;
for (let i = 0; i < 5; i++) {
    const v37 = new ArrayBuffer(14, { maxByteLength: 1000 });
    new BigUint64Array(v37);
}
function f40(a41, a42) {
    `1645374161${268435441}string`;
    -2147483647 - /a\bc/mvd;
    const v50 = new Int32Array(160);
    v50[64] >>>= 160;
    new Int16Array(8);
    v50.length += 2;
    new BigUint64Array(512);
    function f56() {
    }
    try { v50.findLast(f56, v31); } catch (e) {}
    v26.byteOffset *= 2;
    Math.log10(undefined);
    return v27;
}
function f61(a62, a63, a64, a65) {
    const v66 = {};
    try { a62.fill(Int16Array, 64, 2); } catch (e) {}
    const t48 = /S[\xe2\x81\xa3]K+/iv;
    t48[/a\fb\nc\rd\te\vf](ab|cde)+/igsy] ||= -3.0;
    class C72 extends Array {
    }
    new C72();
    try {
        new f40(2, -13);
    } catch(e77) {
    }
}
const v80 = ("0")[-4294967297n];
v23.toString = TestTableSetAndGetFunction;
for (let v81 = 0; v81 < 100; v81++) {
    f40(v81, v81);
}
for (let v83 = 0; v83 < 100; v83++) {
    f61(v31, v31, v31, v32);
}
try {
} catch(e85) {
}
function F86(a88, a89, a90, a91) {
    if (!new.target) { throw 'must be called with new'; }
}
new F86(64, v80, v31, v29);
for (let v93 = 0; v93 < 100; v93++) {
}
for (let v94 = 0; v94 < 100; v94++) {
}
try {
} catch(e95) {
}
function f96() {
    const v97 = {};
}
for (let v98 = 0; v98 < 100; v98++) {
}
f61(v80, v31, v30, v80);
gc();
// Program is interesting due to new coverage: 512 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1431 newly discovered edges in the CFG of the target
