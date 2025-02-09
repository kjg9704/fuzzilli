function f0() {
    return { ..."MIN_SAFE_INTEGER", ..."MIN_SAFE_INTEGER", 16: 2.220446049250313e-16 };
}
f0();
f0();
f0();
function f10(a11, a12, a13, a14) {
    return {};
}
f10();
for (let i = 0; i < 10; i++) {
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 80 newly discovered edges in the CFG of the target
