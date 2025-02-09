const v1 = new WeakSet();
class C3 {
    n(a5) {
        let v6;
        try { v6 = v1.add(a5); } catch (e) {}
        new Proxy(v6, {});
    }
}
const v10 = new C3();
try {
    v10.n(-2);
} catch(e12) {
}
gc();
// Imported program is interesting due to new coverage: 35 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 36 newly discovered edges in the CFG of the target
