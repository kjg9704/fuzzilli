const v3 = [Reflect,Reflect,Reflect,Reflect,Reflect];
const v4 = Reflect.construct(Uint8Array, v3, Float32Array);
try { new v4(Float32Array, v3); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
