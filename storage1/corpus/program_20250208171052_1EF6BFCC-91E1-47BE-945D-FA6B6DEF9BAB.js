function f2() {
    return Array;
}
for (const v4 in [5,-4096,-16,4,1000,10]) {
    for (let v5 = 0; v5 < 100; v5++) {
        f2();
    }
}
try {
    Array.isArray(14);
} catch(e8) {
}
Math.sinh();
f2 ^ 0;
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
