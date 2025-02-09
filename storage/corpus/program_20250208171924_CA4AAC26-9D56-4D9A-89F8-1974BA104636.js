function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1520937323;
    this.h = 1520937323;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Int8Array(129);
new Float64Array(3497);
new Uint8ClampedArray(128);
const v15 = { 2: 128, g: v3 };
v5.h;
let v17 = 0;
do {
    gc();
    const v24 = -(-1000000000000.0);
    gc ** 1;
    Math.cos(-1000000000000.0);
    Math.exp(v24);
    v17++;
} while (v17 < 4)
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
