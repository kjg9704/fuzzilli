new Uint16Array();
function* f2(a3, a4, a5) {
    try {
    } catch(e6) {
    }
    return Uint16Array;
}
f2();
gc();
// Imported program is interesting due to new coverage: 34 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 119 newly discovered edges in the CFG of the target
