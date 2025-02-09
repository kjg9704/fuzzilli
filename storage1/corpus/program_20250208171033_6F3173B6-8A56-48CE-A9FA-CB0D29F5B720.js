const v0 = {};
const v4 = new Uint16Array(256);
for (const v5 of v4) {
    v0[65536] ^= 255;
}
gc();
// Imported program is interesting due to new coverage: 4649 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 46 newly discovered edges in the CFG of the target
