function f0() {
}
function f4(a5, a6) {
    const v7 = { [a6]: -42079n, [24138n]: 24138n };
    return f0;
}
f4(24138n, -42079n);
f4(4n, f0);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
