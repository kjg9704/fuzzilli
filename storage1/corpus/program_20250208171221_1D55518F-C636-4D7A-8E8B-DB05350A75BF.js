const v2 = new Int16Array();
const v4 = new BigInt64Array();
const v6 = new Int16Array(151);
try {
} finally {
    new Int16Array(...v2, ...v6);
}
v4[1000] = -44190n;
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
