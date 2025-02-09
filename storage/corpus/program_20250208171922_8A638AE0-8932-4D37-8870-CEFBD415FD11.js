function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new Uint32Array(1286);
if (F0) {
    try { (1024).includes(1024, F0, ...v5); } catch (e) {}
    let b = F0;
}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
