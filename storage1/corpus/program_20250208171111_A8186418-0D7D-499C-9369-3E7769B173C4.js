const v3 = [14,-635356319,-65535,64];
const v4 = [-14,6596];
const v5 = [15];
const v6 = {
    h: 4,
    d: -1573167473,
    b: v3,
    g: v5,
    e: v5,
    f: v4,
    a: 3,
    c: v3,
    [-1573167473]: v5,
};
delete v6.b;
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
