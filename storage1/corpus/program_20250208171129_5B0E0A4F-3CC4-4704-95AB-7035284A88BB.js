const v1 = new Uint16Array();
Reflect.construct(Uint16Array, [v1]);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
