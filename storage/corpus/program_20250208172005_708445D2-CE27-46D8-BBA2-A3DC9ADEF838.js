function f0() {
    return f0;
}
const v1 = [f0,f0,f0,f0];
const v2 = [v1,f0];
class C3 extends f0 {
    static #m(a5) {
    }
    static #d = v1;
    #f;
    static [v2] = f0;
}
const v8 = new Map();
const v10 = `
    function f11() {
        return -645.3363842568136;
    }
`;
eval(v10);
try { v8.forEach(f0); } catch (e) {}
("getOwnPropertyNames")[10];
gc();
// Imported program is interesting due to new coverage: 26 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
