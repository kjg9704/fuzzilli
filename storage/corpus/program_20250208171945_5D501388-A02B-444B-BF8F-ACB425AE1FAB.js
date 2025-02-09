const v4 = {
    d: 1000000000000.0,
    1073741823: "undefined",
    ..."undefined",
    f: 48233,
    [48233]: 1000000000000.0,
    get a() {
        return this;
    },
};
delete v4.f;
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 78 newly discovered edges in the CFG of the target
