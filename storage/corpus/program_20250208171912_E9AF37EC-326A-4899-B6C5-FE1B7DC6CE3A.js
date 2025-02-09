const v1 = new Float32Array(Float32Array, Float32Array);
for (let v2 = 0; v2 < 5; v2++) {
    v1.slice();
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 32 newly discovered edges in the CFG of the target
