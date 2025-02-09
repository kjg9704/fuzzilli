function f0() {
    return f0;
}
const v1 = /(?<!a)/uy;
class C2 extends f0 {
}
with (C2) {
    for (let v3 = 0; v3 < 10; v3++) {
        v1[v3] = v3;
    }
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
