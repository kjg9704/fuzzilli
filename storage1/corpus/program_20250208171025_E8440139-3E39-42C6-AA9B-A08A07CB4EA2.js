function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [F0,F0,F0];
let v4 = -38637n;
v4 <<= v4;
const v8 = [127,127,268435439n];
Reflect.apply(v3.splice, v2, v8);
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 105 newly discovered edges in the CFG of the target
