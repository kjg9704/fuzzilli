function f0() {
    return f0;
}
const v3 = new Float64Array();
Reflect.construct(Uint8Array, [v3]);
v3.findLastIndex(f0) ** Reflect;
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
