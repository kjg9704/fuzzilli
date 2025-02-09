function f1() {
    arguments[64] = -226570.12338209385;
    return f1;
}
f1();
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
