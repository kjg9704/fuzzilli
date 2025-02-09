// Minimizing 82AF582B-1BC7-40B7-86EB-F37298C2BB4F
const v2 = new WeakSet();
new Uint8ClampedArray(0);
const v8 = new Int16Array(646);
const v11 = new Int32Array(4096);
function f12(a13, a14) {
    return a13;
}
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
function f19(a20, a21, a22, a23) {
    const v24 = {
        apply: f12,
        call: f12,
        construct: f12,
        defineProperty: f12,
        deleteProperty: f12,
        get: f12,
        getOwnPropertyDescriptor: f12,
        getPrototypeOf: f12,
        isExtensible: f12,
        preventExtensions: f12,
        setPrototypeOf: f12,
    };
    new Proxy(v11, v24);
    new Proxy([512,28480,-1073741824,-6150,-1024,9,-4294967295,-65537,-42160], v8);
    new Int32Array();
    return v24;
}
function f32(a33, a34, a35, a36) {
    const v39 = new Float32Array(118);
    Reflect.construct(Uint8ClampedArray, [v39]);
    const v43 = [2.744885169080902e+307,-1.7976931348623157e+308,-1000000000.0,-858078.4136854494,-522921.2072496734];
    const v44 = [342819.7546377422,8.977887946492356,-4.0];
    const v45 = [-5.625611153638612,1000000000.0,1000000.0,-19.02827420745905];
    function f46() {
        return v43;
    }
    function f47(a48) {
        const v54 = {
            g: v45,
            __proto__: v44,
            o(a50, a51) {
                a50 = v45;
                try {
                    f46();
                } catch(e53) {
                }
                return a48;
            },
            e: v43,
            h: v45,
        };
        return v54;
    }
    f47(v45);
    f47(v45);
    return Int32Array;
}
const v59 = new Uint8ClampedArray(4096);
for (const v60 in v59) {
    typeof (v60 >= v60);
}
for (let v63 = 0; v63 < 100; v63++) {
    f19(v63, Int16Array, v63, v63);
}
for (let v65 = 0; v65 < 100; v65++) {
}
function f66(a67) {
    const v69 = {
        get g() {
        },
    };
    return v69;
}
f19(Uint8ClampedArray, f32(646, 4096, 4096, Int32Array), v2, 646);
for (let v72 = 0; v72 < 100; v72++) {
}
for (let v73 = 0; v73 < 100; v73++) {
}
const v74 = {};
const v75 = {};
const v76 = {};
const v77 = {};
f32(4096, 646, 0, v76);
gc();
// Program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
