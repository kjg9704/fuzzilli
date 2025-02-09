function f0() {
    const v9 = {
        f: -65537,
        set e(a5) {
        },
        b: "Si",
        e: "Si",
        d: 0.0,
        g: -65537,
    };
    return v9;
}
const v10 = f0();
const v11 = f0();
f0();
class C13 extends f0 {
    #h;
    #g;
    constructor(a15) {
        super();
        function f16() {
            return v11;
        }
    }
    10000 = v11;
    [v11];
}
const v17 = new C13(v11);
const v18 = new C13(v10);
new C13(v17);
[-1000000.0,-1.4299237608361254e+307,-581180.0744737107];
[1e-15,Infinity,5.0,84.06554768557749];
const v23 = [988.2377782198905,NaN,-1000000000000.0,577620.4335219604,-0.0,Infinity,5.0,-5.0,-2.220446049250313e-16];
let v24 = 0;
do {
    function f25(a26, a27, a28) {
        try { a28.m(a28, f0, v23, v18); } catch (e) {}
        return gc();
    }
    f25(v18, v17, v11);
    v24++;
} while (v24 < 6)
gc();
// Imported program is interesting due to new coverage: 46 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
