function f0() {
    return f0;
}
const v1 = [3.0,54043.00266622822,0.742479558504807,-958738.3718118223,1.7976931348623157e+308,0.778497259091579,1.0,327197.697896061,171.07231840197687,-1.7599590370411704];
const v2 = [1000000.0,839587.7582869062];
const v3 = [8.46072443430436];
function f4(a5) {
    const v8 = {
        b: v3,
        g: a5,
        a: f0,
        f: v2,
        e: v1,
        [v1]: v2,
        set c(a7) {
        },
    };
    return v8;
}
Object.defineProperty(f4(), "g", { get: f4, set: f4 });
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
