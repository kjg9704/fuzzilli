function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [-920250809,-10,5,128,22060,9007199254740991];
class C3 extends F0 {
    constructor(a5, a6, a7, a8) {
        super();
        Object.defineProperty(v2, "c", { configurable: true, enumerable: true, value: this });
    }
}
new C3();
new C3();
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
