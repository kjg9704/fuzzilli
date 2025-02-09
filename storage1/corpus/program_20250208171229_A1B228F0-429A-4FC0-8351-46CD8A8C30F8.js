// Minimizing FBD0D563-E7FA-4210-8170-6A03A6226EB5
const v4 = {
    g: -536870912,
    2304: -536870912,
    m(a2, a3) {
        return a2;
    },
};
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a7;
}
const v8 = new F5(v4);
class C9 {
}
const v10 = new C9();
const v13 = JSON.stringify(v8);
const v14 = JSON.stringify(v10);
const v16 = JSON.stringify(JSON.stringify(v10));
JSON.parse(3);
JSON.parse(v16);
JSON.parse(v14);
JSON.parse(v13);
JSON.parse(v13);
gc();
// Program is interesting due to new coverage: 75 newly discovered edges in the CFG of the target
