const v1 = [11,-11,1024,-65535,-4294967295,-15,1073741824,7,4096];
try {
    new BigInt64Array(v1);
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 48 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
