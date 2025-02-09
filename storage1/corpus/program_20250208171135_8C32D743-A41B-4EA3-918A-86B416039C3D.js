const v1 = [NaN,-1.0,-4.0,-2.0471506068481293,-0.0,NaN,0.9248818276540086,-1.3102696765284585e+308,1.0];
try {
    new WeakMap(v1);
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
