const v0 = [4096];
for (let v1 = 0; v1 < 5; v1++) {
    function f2() {
        return v1;
    }
    Object.defineProperty(v0, 16, { configurable: true, get: f2, set: f2 });
}
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 91 newly discovered edges in the CFG of the target
