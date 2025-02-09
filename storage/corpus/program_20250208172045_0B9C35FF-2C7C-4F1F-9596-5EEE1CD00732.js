const v2 = new Int32Array(2);
const v4 = (1728)[v2];
try {
    v2.reduce(v4);
} catch(e6) {
}
switch (Int32Array) {
    case 2:
        break;
}
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
