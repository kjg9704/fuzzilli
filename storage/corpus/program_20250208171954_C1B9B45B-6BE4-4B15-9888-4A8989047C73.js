const v0 = [-128,1073741824,65535,-874200757,255,1938306467,-61193];
for (let i = 0; i < 10; i++) {
    v0.shift();
}
new Uint8ClampedArray(v0);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
