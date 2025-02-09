const v3 = {
    get d() {
        return this;
    },
    h: "4294967295",
    d: -3.0,
};
delete v3.h;
gc();
// Imported program is interesting due to new coverage: 51 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
