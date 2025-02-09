const v1 = new Int16Array();
const v2 = [-4.0,2.0,-1e-15,-2.2250738585072014e-308,-4.28543074089572,5.0];
v1[[-1e-15,-2.220446049250313e-16,5.0]] /= v2;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
