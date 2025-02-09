class C3 {
    o(a5) {
        a5?.[-1e-15];
    }
    static [-1e-15];
    static 5;
    static h = -128;
    static g;
    static e = -1e-15;
    static #h;
    4143298214 = 9007199254740990;
    [9007199254740990] = 9007199254740990;
}
const v7 = new C3();
const v8 = new C3();
const v9 = new C3();
let v11 = -872.9585054860471;
function f14(a15, a16, a17, a18) {
    const v23 = {
        a: v8,
        set h(a20) {
            a16 & v9;
        },
        13: 1000000000000.0,
        [C3]: v9,
        d: a16,
    };
    return v23;
}
f14(v8, v9, f14, 0.15523295348726063);
f14();
const v26 = f14(v7, v9);
let v27 = 0;
do {
    v11++;
    for (let v29 = 0; v29 < 100; v29++) {
        f14(v26, v9);
    }
    v27++;
} while (v27 < 8)
gc();
// Imported program is interesting due to new coverage: 833 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 371 newly discovered edges in the CFG of the target
