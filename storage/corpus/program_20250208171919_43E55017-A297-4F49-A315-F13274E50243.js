const v2 = new Int16Array(3412);
class C4 extends Uint16Array {
    constructor(a6, a7, a8, a9) {
        super(v2);
    }
}
new C4();
gc();
// Imported program is interesting due to new coverage: 39 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
