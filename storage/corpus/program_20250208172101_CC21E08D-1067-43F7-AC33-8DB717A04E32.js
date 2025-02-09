const v1 = new Map();
class C2 extends Map {
    constructor(a4, a5) {
        super(v1);
    }
}
const v6 = new C2(C2, C2);
new C2(C2, v6);
gc();
// Imported program is interesting due to new coverage: 29 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
