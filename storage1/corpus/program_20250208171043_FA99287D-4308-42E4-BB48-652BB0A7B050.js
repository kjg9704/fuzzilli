let v1 = null;
class C2 extends Uint16Array {
    constructor(a4, a5, a6, a7) {
        super();
        v1 ??= a7;
    }
}
new C2(C2, Uint16Array, v1, v1);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
