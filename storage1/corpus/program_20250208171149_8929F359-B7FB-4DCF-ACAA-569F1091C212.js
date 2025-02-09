class C3 {
    #g = "isNaN";
}
const v4 = new C3();
const v5 = new C3();
class C6 extends C3 {
    b = C3;
    constructor(a8, a9, a10) {
        super();
        delete a9?.[64];
        for (let v12 = 0; v12 < 32; v12++) {
            a10["p" + v12] = v12;
        }
    }
}
const v15 = new C6("o", "filter", v5);
const v16 = new C6(C6, C6, v15);
new C6(C3, "o", v16);
const v19 = { __proto__: C3 };
v4[268435439] *= -1;
v19[9];
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
