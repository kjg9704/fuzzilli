const v0 = {};
const v1 = { __proto__: v0 };
const v2 = {};
try {
    4.0 >= v2.h;
    v0.__proto__ = v1;
} catch(e6) {
}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
