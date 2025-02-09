class C1 {
}
const v3 = [712.0641562755936,C1];
try {
    new Map(v3);
} catch(e5) {
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 47 newly discovered edges in the CFG of the target
