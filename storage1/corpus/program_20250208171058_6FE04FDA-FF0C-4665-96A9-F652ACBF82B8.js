const v0 = [1073741824,9007199254740991,-2044648022,-984676463,35502,1073741825,257,-1060632447,2147483648];
for (let i = 0; i < 5; i++) {
    v0[1024] = v0;
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
