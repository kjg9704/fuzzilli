let v0 = "object";
let v1 = "-1946502897";
function f3(a4, a5) {
    const v10 = {
        __proto__: v1,
        f: a4,
        c: a4,
        [a5]: v0,
        ...v1,
        ["URZO"](a7) {
            try {
                super.map();
            } catch(e9) {
            }
            return v0;
        },
        ...a5,
        a: "URZO",
        d: a4,
    };
    return v10;
}
const v11 = f3(v1, f3);
const v13 = f3(v1, f3("URZO", v11));
new Int8Array(256);
const v19 = new Uint32Array(1);
const v22 = new BigUint64Array(1024);
let v23;
try { v23 = v0.matchAll(v19); } catch (e) {}
v13.c >>>= 1;
const v24 = --v0;
v13.c;
({"c":v1,} = v11);
new Int8Array(1, v23, 256, v24, v22["toSorted"](f3));
gc();
// Imported program is interesting due to new coverage: 1160 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 329 newly discovered edges in the CFG of the target
