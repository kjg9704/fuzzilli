const v0 = [1000000.0,7.355764398462678e+307,3.0,488561.16890580184];
try {
    const v2 = [v0];
    Reflect.apply(v0.some, v0, v2);
} catch(e5) {
}
gc();
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
