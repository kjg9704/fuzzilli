class C0 {
    constructor(a2) {
        const v3 = ++a2;
        try { v3(C0); } catch (e) {}
    }
}
new C0();
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
