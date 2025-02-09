("9007199254740990").toUpperCase();
try {
    new Uint16Array("9007199254740990");
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 36 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
