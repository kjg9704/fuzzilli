function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5, a6) {
    let v8 = new Uint8ClampedArray(a3, a4, a6);
    let v9 = 1;
    let v10 = "4";
    ({"e":v9,"length":v8,} = v10);
    --v10;
    let v12 = 0;
    do {
        try {
        } catch(e13) {
        }
        v12++;
    } while (v12 < 8)
    const v17 = {};
    for (let v18 = 0; v18 < 76; v18++) {
        const t18 = {};
        t18.g = F0;
        const t20 = {};
        t20.a = F0;
        const v21 = {};
        const v22 = {};
    }
}
for (let v23 = 0; v23 < 100; v23++) {
    f2();
}
gc();
