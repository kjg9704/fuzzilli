const v2 = {
    set h(a1) {
    },
};
function f3() {
    return f3;
}
Object.defineProperty(v2, "h", { configurable: true, get: f3 });
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
