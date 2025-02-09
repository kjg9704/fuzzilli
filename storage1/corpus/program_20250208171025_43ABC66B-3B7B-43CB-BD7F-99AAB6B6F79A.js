function f0() {
    return f0;
}
async function f1(a2, a3, a4, a5) {
    return await f0;
}
f1(f1, f1, f0, f1);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 482 newly discovered edges in the CFG of the target
