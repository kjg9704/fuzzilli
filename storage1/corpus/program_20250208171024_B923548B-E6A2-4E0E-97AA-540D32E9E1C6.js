const v1 = new WeakMap();
for (const v3 in { __proto__: v1 }) {
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
