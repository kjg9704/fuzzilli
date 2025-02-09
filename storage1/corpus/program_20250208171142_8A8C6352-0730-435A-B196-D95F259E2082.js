const v3 = [129n,-30456n,-30456n,-341060242n,129n];
const v4 = [v3,v3];
const v5 = [-341060242n];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
}
const v10 = new F6(-341060242n, v3);
new F6(v4, v5);
const v12 = new F6(v10, v5);
class C13 {
    #f;
    static d = v12;
    n(a15, a16, a17, a18) {
        return v5;
    }
    constructor(a20, a21) {
        v5.#f = v4;
    }
}
try {
    new C13(v12, v3);
} catch(e23) {
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
