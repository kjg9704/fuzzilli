class C0 {
    constructor(a2) {
        a2 = SyntaxError;
    }
}
new C0();
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 196 newly discovered edges in the CFG of the target
