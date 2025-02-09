const v1 = new WeakMap();
function f2(a3) {
    const v6 = {
        d: WeakMap,
        h: a3,
        e: WeakMap,
        [WeakMap](a5) {
        },
        f: v1,
        b: a3,
    };
    return v6;
}
const v7 = f2(WeakMap);
const v10 = {
    ...v7,
    65537: f2,
    [v1]: f2,
    a: f2,
    [f2]: f2,
    2147483647: f2,
    set f(a9) {
    },
};
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
