class C3 {
    p(a5, a6, a7) {
        const v8 = a7[-7];
        for (const v9 of "prototype") {
            try { v8(); } catch (e) {}
        }
    }
}
const v11 = new C3();
const v13 = [v11,C3,C3];
Reflect.apply(v11.p, "o", v13);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 68 newly discovered edges in the CFG of the target
