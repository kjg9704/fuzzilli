function f0() {
    return f0;
}
const v1 = [f0];
for (let v3 = 0; v3 < 58; v3++) {
    for (let v4 = 0; v4 < 88; v4++) {
        v1[0] += v4;
    }
    RangeError(v3, v3, ...v1);
}
gc();
// Imported program is interesting due to new coverage: 59 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 479 newly discovered edges in the CFG of the target
