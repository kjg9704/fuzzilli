const v1 = new BigUint64Array();
try {
    v1.with(2033016098, 3n);
} catch(e5) {
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
