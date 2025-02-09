let v0 = 4096;
const v2 = new Uint8Array(v0);
for (const v4 of v2) {
    v0 = v4;
    [] = v2;
}
try { v0(); } catch (e) {}
Uint8Array > 1;
gc();
// Imported program is interesting due to new coverage: 112 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 66 newly discovered edges in the CFG of the target
