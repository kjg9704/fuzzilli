for (const v1 in [-2147483647,9223372036854775807,7,-1400939636,-268435456,65535]) {
    function f2(a3) {
        return a3;
    }
    class C4 extends f2 {
    }
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
