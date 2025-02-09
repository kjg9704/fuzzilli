function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
async function* f7(a8, a9) {
    return a8;
}
const t6 = f7();
t6[F1] = -2147483649;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
