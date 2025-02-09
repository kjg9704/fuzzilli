function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10403;
    this.a = 10403;
    this.c = 10403;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static #h = F0;
    n(a8, a9, a10, a11) {
        a8.__proto__;
        v4 in this;
        return a9 > a8 ? a9 : a8;
    }
    constructor(a17, a18) {
        super();
        for (const v19 in v5) {
            try {
                a18.#h <<= v19;
            } catch(e20) {
            }
        }
    }
}
new C6();
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
