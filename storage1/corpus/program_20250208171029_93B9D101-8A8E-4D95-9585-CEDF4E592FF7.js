class C0 {
}
class C2 extends C0 {
    constructor(a4, a5, a6) {
        super();
        for (let v7 = 0; v7 < 32; v7++) {
        }
        const v9 = Symbol.iterator;
        const v11 = {
            [v9]() {
            },
        };
    }
}
new C2();
new C2();
new C2();
new C2();
gc();
// Imported program is interesting due to new coverage: 25 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
