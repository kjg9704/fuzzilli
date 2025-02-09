function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
new F0();
new F0();
const v7 = new Uint8Array(256);
new Uint32Array(v2, 256, 256);
const v12 = new Uint8ClampedArray(3665);
let [v13] = v12;
F0 %= v13;
try { v7.indexOf(v13); } catch (e) {}
class C15 extends Uint32Array {
    static [256];
    #b;
}
new C15();
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
