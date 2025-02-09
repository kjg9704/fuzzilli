const v2 = ["sticky","sticky","sticky"];
const v3 = [v2,v2,v2,v2];
[] = v3;
v3["toString"]("symbol", ...[65536,-13,1541421754], ..."sticky", ...v2, ..."symbol");
gc();
// Imported program is interesting due to new coverage: 72 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
