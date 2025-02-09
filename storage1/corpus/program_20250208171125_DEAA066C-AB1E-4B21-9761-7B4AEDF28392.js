async function f1(a2, a3, a4, a5) {
    await 14n;
    return a3;
}
f1();
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
