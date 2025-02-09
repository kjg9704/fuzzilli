class C1 {
    static m(a3) {
        const t2 = "6";
        t2[1] = a3;
    }
}
try { C1.m(); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
