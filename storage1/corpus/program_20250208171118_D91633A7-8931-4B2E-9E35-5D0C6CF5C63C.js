function f0() {
}
let v1 = 2758;
const v3 = new Uint16Array(v1);
const v6 = new Uint8ClampedArray(1000);
v6.reduceRight(f0, Uint8ClampedArray);
for (const v8 of v3) {
    v1 /= v1;
}
gc();
// Imported program is interesting due to new coverage: 108 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
