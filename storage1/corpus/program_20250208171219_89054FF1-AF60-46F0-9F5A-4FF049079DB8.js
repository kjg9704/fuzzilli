let v0 = 2046;
const v4 = {
    get b() {
        return gc();
    },
};
function f5(a6, a7, a8, a9) {
    ({"c":a8,"d":v0,...v0} = v4);
    return a8;
}
f5(v0, f5, v4, v4);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
