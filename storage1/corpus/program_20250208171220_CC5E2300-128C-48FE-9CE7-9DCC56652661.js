function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = {};
const v5 = new Proxy(F0, v3);
v3[v5] = undefined;
gc();
// Imported program is interesting due to new coverage: 54 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
