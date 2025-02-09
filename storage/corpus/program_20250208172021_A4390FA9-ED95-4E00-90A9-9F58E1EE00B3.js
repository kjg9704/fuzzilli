function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -65535;
}
const v3 = new F0();
v3.d **= -1000.0;
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
