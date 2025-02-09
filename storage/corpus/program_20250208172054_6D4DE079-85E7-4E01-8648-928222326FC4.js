function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = [F0,"57376",F0,true,F0];
const v7 = [true];
const v8 = v5.unshift;
Reflect.apply(v8, v2, v7);
let v10;
try { v10 = v8(); } catch (e) {}
v5.sort(v10);
gc();
// Imported program is interesting due to new coverage: 88 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
