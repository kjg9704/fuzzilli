function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
Reflect.construct(Float32Array, [[F0,C2]]);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
