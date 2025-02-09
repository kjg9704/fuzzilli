function f0() {
    const v4 = {
        c: "1515462714",
        h: "1515462714",
        1042607863: "1515462714",
        a: "n",
        d: 0.9610925634324998,
        e: 0.9610925634324998,
        b: 0.9610925634324998,
        [0.9610925634324998]: 0.9610925634324998,
    };
    return v4;
}
const v5 = f0();
const v9 = {
    toString(a7, a8) {
        return v5;
    },
    g: f0,
    ...v5,
};
delete v9.b;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
