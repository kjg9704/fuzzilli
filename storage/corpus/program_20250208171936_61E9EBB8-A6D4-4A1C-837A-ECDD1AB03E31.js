const v3 = new Uint32Array(1412);
for (const v5 in { ...v3 }) {
    new Uint16Array({});
}
gc();
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 21 newly discovered edges in the CFG of the target
