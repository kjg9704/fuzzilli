class C0 {
    constructor(a2, a3) {
        function f4(a5, a6) {
            return a6;
        }
        new Promise(f4);
    }
}
const v9 = new C0();
new C0(C0, v9);
let v11 = [C0,C0,C0,C0,C0];
v11.__proto__ = v9;
v11++;
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
