function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const t4 = "sPAwh";
t4.valueOf = F0;
const v6 = {};
("2147483649").concat(v6, v6, v2, -0.0);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
