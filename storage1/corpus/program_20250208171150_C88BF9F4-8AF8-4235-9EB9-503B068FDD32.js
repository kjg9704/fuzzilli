const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v2 = [-9223372036854775808,9007199254740992,268435440,3,-4,43044];
const v3 = v2.shift();
let v4;
try { v4 = v3(v3, v3, v2); } catch (e) {}
v1["copyWithin"](v3, v4, v3);
gc();
// Imported program is interesting due to new coverage: 69 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
