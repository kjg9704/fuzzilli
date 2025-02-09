function f0(a1) {
    const v3 = {
        get g() {
            super.g = this;
        },
    };
    return v3;
}
const v4 = f0();
const v5 = { ...v4 };
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
