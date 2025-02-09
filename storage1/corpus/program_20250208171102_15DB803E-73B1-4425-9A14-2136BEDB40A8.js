class C2 extends Int32Array {
}
const v3 = new C2();
try {
    v3.set({}, 5);
} catch(e6) {
}
gc();
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
