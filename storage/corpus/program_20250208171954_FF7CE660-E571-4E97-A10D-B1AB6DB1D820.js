const t0 = Error().stack.constructor;
const v6 = new t0(3, 6);
v6.toString();
JSON.parse(-5.0);
JSON.parse(2483);
gc();
// Imported program is interesting due to new coverage: 60 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 72 newly discovered edges in the CFG of the target
