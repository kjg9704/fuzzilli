const v0 = /(?!a)?a\1/ig;
const v1 = { __proto__: v0 };
try {
    v1.exec();
} catch(e3) {
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 52 newly discovered edges in the CFG of the target
