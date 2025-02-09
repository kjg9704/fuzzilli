function f0() {
    return f0;
}
Object.defineProperty([-11,1715651780,4,4,8,230369659,240399071,11], 6, { configurable: true, get: f0 });
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
