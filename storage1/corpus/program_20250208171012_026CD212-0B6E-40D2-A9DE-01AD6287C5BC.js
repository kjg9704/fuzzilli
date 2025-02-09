function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65535;
    this.e = -65535;
    this.a = -65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const v11 = {
        set a(a9) {
            super[a9] = v5;
            v5 in v4;
        },
        b: F0,
        g: v4,
        d: v3,
        f: F0,
        ...v5,
        __proto__: v4,
    };
    return v11;
}
const v12 = f6(v3);
f6(v4);
const v14 = f6(v5);
class C15 {
    toString(a17, a18, a19, a20) {
        let v22;
        try { v22 = a18["setUTCDate"](); } catch (e) {}
        super.e ??= v22;
        return F0;
    }
    [f6];
    #f = F0;
    [F0];
    static 1;
}
const v23 = new C15();
const v24 = new C15();
new C15();
v3[10000];
try { v5["toString"]("toString", v12, v23, v24, C15); } catch (e) {}
try {
    v5.shift(v14, undefined, 268435456n, 717228045n);
} catch(e33) {
}
gc();
// Imported program is interesting due to new coverage: 786 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 202 newly discovered edges in the CFG of the target
