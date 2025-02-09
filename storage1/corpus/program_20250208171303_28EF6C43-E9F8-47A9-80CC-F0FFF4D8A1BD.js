// Minimizing 8087B628-3DD6-46B6-A983-96B7515080B6
const v1 = new WeakSet();
new Uint8ClampedArray(0);
const v7 = new Int16Array(646);
const v10 = new Int32Array(4096);
function f11(a12, a13) {
    return a12;
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
function f18(a19, a20, a21, a22) {
    const v23 = {
        apply: f11,
        call: f11,
        construct: f11,
        defineProperty: f11,
        deleteProperty: f11,
        get: f11,
        getOwnPropertyDescriptor: f11,
        getPrototypeOf: f11,
        isExtensible: f11,
        preventExtensions: f11,
        setPrototypeOf: f11,
    };
    new Proxy(v10, v23);
    new Proxy([512,28480,-1073741824,-6150,-1024,9,-4294967295,-65537,-42160], v7);
    new Int32Array();
    return v23;
}
function f29(a30, a31, a32, a33) {
    const v36 = new Float32Array(118);
    Reflect.construct(Uint8ClampedArray, [v36]);
    const v40 = [2.744885169080902e+307,-1.7976931348623157e+308,-1000000000.0,-858078.4136854494,-522921.2072496734];
    const v41 = [342819.7546377422,8.977887946492356,-4.0];
    const v42 = [-5.625611153638612,1000000000.0,1000000.0,-19.02827420745905];
    function f43() {
        return v40;
    }
    function f44(a45) {
        const v49 = {
            g: v42,
            __proto__: v41,
            o(a47, a48) {
            },
        };
    }
    f44();
}
for (let v51 = 0; v51 < 100; v51++) {
    f29();
}
f18(Uint8ClampedArray, 4096, v1);
gc();
// Program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
