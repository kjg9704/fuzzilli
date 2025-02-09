class C2 {
    ["undefined"] = "F";
    m(a4) {
        for (const v5 of "F") {
            const t4 = "F";
            t4.length = 1;
        }
    }
}
const v7 = new C2();
gc();
new C2();
try { v7.m(); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
