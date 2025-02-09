function f0(a1) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = arguments;
    }
    new F3();
    const v9 = new F3();
    return v9;
}
f0();
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
