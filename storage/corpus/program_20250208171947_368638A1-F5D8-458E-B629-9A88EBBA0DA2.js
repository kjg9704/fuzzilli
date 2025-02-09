function f3(a4, a5) {
    undefined >>> a5;
    return a4;
}
try {
    f3(-65535n, 6n);
} catch(e8) {
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
