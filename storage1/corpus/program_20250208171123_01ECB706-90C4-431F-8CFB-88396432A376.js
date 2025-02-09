class C3 {
    static get h() {
    }
    static f = -1.5892462850364226e+308;
    static [15n];
    #f;
}
const v5 = new C3();
const v6 = new C3();
const v8 = new Date(646594.497661801);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = new F9(-1.5892462850364226e+308, v8);
new F9(646594.497661801, v5, v14);
new F9(646594.497661801, C3, v6);
for (let v17 = 0; v17 < 16; v17++) {
    for (let v18 = 0; v18 < 5; v18++) {
        v5["p" + v18] = v18;
    }
}
Math.asin(6);
v8 / 6;
gc();
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
