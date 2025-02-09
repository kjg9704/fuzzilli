const v4 = {
    set e(a3) {
    },
    d: 1000000000.0,
    e: "boolean",
};
const v5 = { __proto__: v4 };
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
