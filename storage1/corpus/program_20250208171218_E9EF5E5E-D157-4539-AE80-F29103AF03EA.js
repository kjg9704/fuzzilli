const v1 = [-5.0,-1000000000000.0,-Infinity,NaN,771.3521008721375,-1000000.0,-3.0,-1000000.0,Infinity,-902680.4507368875];
try {
    new WeakSet(v1);
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
