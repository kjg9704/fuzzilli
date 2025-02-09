function f0() {
}
class C2 extends f0 {
    constructor(a4, a5, a6, a7) {
        super();
        super[a4];
    }
    static {
        f0 ||= f0;
        for (let v10 = 0; v10 < 10; v10++) {
            f0();
        }
    }
}
new C2(-1024);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
