const v2 = [Reflect,Reflect];
Reflect.apply(Array.of, Array, v2);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
