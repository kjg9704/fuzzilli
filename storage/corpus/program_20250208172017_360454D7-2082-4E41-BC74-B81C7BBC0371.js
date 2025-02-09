class C1 {
    static #m(a3, a4, a5, a6) {
    }
}
eval("");
const v10 = new C1();
const v11 = new C1();
for (let v12 = 0; v12 < 10; v12++) {
    async function* f13(a14, a15, a16, a17) {
        yield* v12;
        return v10;
    }
    f13(f13, 3228, v11);
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
