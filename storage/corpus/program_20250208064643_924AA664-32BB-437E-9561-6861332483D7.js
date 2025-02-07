// Minimizing 6581AA3F-4206-429A-8370-B6E476C0C5AB
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -832.8435169204251;
    this.g = a4;
}
const v5 = new F2(F2);
class C6 extends F2 {
    #c = 3.4643662601744385;
}
const v9 = ("b").normalize("NFKD");
for (const v10 in v5) {
    const v12 = Symbol.iterator;
    const v18 = {
        [v12]() {
            let v14 = 10;
            const v17 = {
                next() {
                    v14--;
                    return v9;
                },
            };
        },
    };
}
gc();
// Program is interesting due to new coverage: 43 newly discovered edges in the CFG of the target
