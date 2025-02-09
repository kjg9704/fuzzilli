function f3() {
    return -14n;
}
class C7 {
    static h = -256;
    p(a9, a10) {
        try {
            new f3();
        } catch(e12) {
        }
        try { this.m(this, 356567459n, -14n, a9, -256); } catch (e) {}
        Math.log2(f3);
        const v18 = -846950626 / 39991;
        Math.log1p(f3);
        Math.atanh(39991);
        return ~v18;
    }
}
new C7();
const v23 = new C7();
const v24 = new C7();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a27;
    this.d = v23;
}
new F25(1n, f3, 1073741823, 1073741823);
const v32 = new F25(1n, C7, 1627832945, 1627832945);
const v33 = new F25(1n, v24, -256, -256);
v33 > -14n ? v33 : -14n;
const v36 = { ...C7, ...v32, e: v24, a: v23 };
const v41 = new ArrayBuffer(5, { maxByteLength: 5 });
new Int16Array(v41);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
