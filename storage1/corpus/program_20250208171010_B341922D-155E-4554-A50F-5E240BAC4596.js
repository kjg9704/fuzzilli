class C1 {
    constructor(a3, a4) {
        let v2 = this;
        function f5() {
            v2 = arguments;
            arguments.length -= -3.437332629636507;
            return -3.437332629636507;
        }
        f5();
    }
}
new C1();
gc();
// Imported program is interesting due to new coverage: 26 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 115 newly discovered edges in the CFG of the target
