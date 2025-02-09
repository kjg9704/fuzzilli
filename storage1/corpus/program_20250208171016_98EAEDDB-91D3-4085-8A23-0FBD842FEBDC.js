class C0 {
    toString(a2, a3) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return F4;
    }
}
const v8 = new C0();
const v9 = [v8];
try { v9.slice(v8); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 30 newly discovered edges in the CFG of the target
