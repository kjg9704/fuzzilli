function f0(a1, a2) {
    return f0;
}
const v3 = {
    apply: f0,
    call: f0,
    construct: f0,
    defineProperty: f0,
    deleteProperty: f0,
    get: f0,
    getPrototypeOf: f0,
    has: f0,
    isExtensible: f0,
    ownKeys: f0,
    preventExtensions: f0,
    set: f0,
};
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
