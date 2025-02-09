function f2(a3) {
    return { [9007199254740991n]: a3 };
}
f2(f2);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
new F6(-9223372036854775808n);
const v13 = {
    apply: f2,
    construct: f2,
    deleteProperty: f2,
    getPrototypeOf: f2,
    isExtensible: f2,
};
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
