function f1(a2) {
    const v3 = { [a2]: 2147483649n };
    return a2;
}
const v6 = new Int16Array(1024);
v6.sort(f1);
gc();
// Imported program is interesting due to new coverage: 89 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
