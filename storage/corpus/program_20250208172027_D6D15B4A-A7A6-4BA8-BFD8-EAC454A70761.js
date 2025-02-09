try {
} finally {
}
try {
const t0 = 1073741824;
t0();
} catch (e) {}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 85 newly discovered edges in the CFG of the target
