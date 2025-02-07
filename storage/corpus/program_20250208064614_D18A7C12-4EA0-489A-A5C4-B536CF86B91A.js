// Minimizing B0282234-C975-49AA-8482-38F70C999DA8
class C2 {
    #toString(a4) {
    }
    #f = "38551";
    static ["38551"] = -4294967296;
    ["38551"] = -4294967296;
}
class C5 extends C2 {
    get d() {
        delete C2[-2];
    }
    static #d = C2;
    set d(a9) {
        this[3] >>= -4294967296;
    }
}
new C5();
C2.f >>= -7736;
gc();
// Program is interesting due to new coverage: 89 newly discovered edges in the CFG of the target
