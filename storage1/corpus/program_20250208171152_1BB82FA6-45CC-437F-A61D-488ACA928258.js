function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.a = "4";
}
const v6 = new F1();
delete v6.h;
gc();
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
