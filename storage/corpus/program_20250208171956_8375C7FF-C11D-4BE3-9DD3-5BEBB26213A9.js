const v2 = new Uint8Array();
v2["-9223372036854775808"];
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 40 newly discovered edges in the CFG of the target
