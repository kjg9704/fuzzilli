class C0 {
}
class C1 extends C0 {
    static #n(a3, a4) {
        return C0;
        try { C0(); } catch (e) {}
    }
}
const v7 = new Float32Array(C1, C0, C0);
C1 + Float32Array;
try { v7(Uint8Array, Float32Array, C0, Int16Array, ...v7); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
