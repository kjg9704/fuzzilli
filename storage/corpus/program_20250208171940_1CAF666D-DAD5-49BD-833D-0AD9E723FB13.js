class C2 {
}
new C2();
class C4 extends C2 {
    #toString(a6, a7, a8, a9) {
    }
    constructor(a11, a12, a13, a14) {
        super();
        try { a14(129, a11); } catch (e) {}
        Math.imul();
    }
}
const v18 = new C4();
const v20 = `
    try {
    const t0 = 1000000.0;
    t0(1000000.0, v18, v20);
    } catch (e) {}
`;
eval(v20);
gc();
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
