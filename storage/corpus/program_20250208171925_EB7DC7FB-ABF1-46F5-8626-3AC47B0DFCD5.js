function f0() {
    return f0;
}
const v2 = new Int16Array();
with (v2) {
    f0();
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
