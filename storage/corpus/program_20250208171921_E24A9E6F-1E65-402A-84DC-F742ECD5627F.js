for (let i = 0; i < 10; i++) {
    function f0() {
    }
    const v1 = f0();
    const v2 = f0();
    const v3 = f0();
    class C5 {
        n(a7) {
            [this,/(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\11/dyg,v3,false,v2];
        }
        0;
        static [v1];
    }
    const v10 = new C5();
    const v11 = new C5();
    class C12 {
        constructor(a14, a15) {
            super[a14];
        }
        #m(a18, a19) {
            a19.#m(v10);
        }
    }
    new C12(v11);
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 59 newly discovered edges in the CFG of the target
