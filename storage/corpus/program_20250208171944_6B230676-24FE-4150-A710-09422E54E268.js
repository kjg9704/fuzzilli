class C0 {
    constructor(a2, a3) {
        delete this[65537];
        for (let v5 = 0; v5 < 25; v5++) {
            this["p" + v5] = v5;
        }
    }
}
for (let i = 0; i < 10; i++) {
    new C0();
}
gc();
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 31 newly discovered edges in the CFG of the target
