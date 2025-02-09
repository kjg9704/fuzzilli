function f0() {
    return f0;
}
class C1 {
    static [f0] = f0;
    static #p() {
        super.f = gc;
    }
}
const v4 = new C1();
const v5 = new C1();
function f7() {
    return Date;
}
class C8 {
    static #b = v5;
    static get a() {
    }
    constructor(a11, a12, a13, a14) {
        let v15;
        try { v15 = a13.o(C1); } catch (e) {}
        Date.UTC(v15, v15, v15, v15);
    }
    [C1] = f7;
}
new C8(C1, C8, v5);
const v18 = new C8(v5, C8, v4);
new Float32Array(89);
class C22 {
    static c = v18;
}
gc();
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
