function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 {
    constructor(a7, a8, a9, a10) {
        F0[F0] /= a9;
        for (let v11 = 0; v11 < 32; v11++) {
            F0["p" + v11] = v11;
        }
    }
}
const v14 = new C5("maxByteLength", "undefined", "maxByteLength");
const v15 = new C5("maxByteLength", C5, "undefined", v14);
new C5(v15, "undefined", v15, "maxByteLength");
"mRo" + C5;
new C5("mRo", "mRo", "maxByteLength");
const v20 = [];
Reflect.apply(("mRo").replaceAll, v14, v20);
gc();
// Imported program is interesting due to new coverage: 30 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 46 newly discovered edges in the CFG of the target
