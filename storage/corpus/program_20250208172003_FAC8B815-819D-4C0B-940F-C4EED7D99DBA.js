const v1 = /(?<=a)/musg;
try {
    4294967296n ** v1;
} catch(e3) {
} finally {
}
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
