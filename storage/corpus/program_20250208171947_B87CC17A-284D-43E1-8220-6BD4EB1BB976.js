const v0 = [268435456,-4,-9007199254740992,268435439,13];
const v1 = [5,268435456,43295,4294967295,2147483649,-9007199254740991,536870888];
const v2 = [-65537,255,-1,1967354844,-29961];
const v4 = new Set();
class C5 extends Set {
    constructor(a7, a8) {
        super(a8);
    }
    static {
        new Set(v1);
    }
}
new C5(v2, v0);
new C5(v2, v4);
gc();
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
