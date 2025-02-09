function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F1 {
    constructor(a6, a7, a8, a9) {
        super();
        Object.defineProperty(Set, 1146037985, { writable: true, configurable: true, enumerable: true, value: Set });
        Set[1146037985] = -460.98380803512384;
        class C11 extends Set {
        }
    }
}
new C4();
new C4();
gc();
