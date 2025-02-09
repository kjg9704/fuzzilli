let v0 = "unicode";
const v3 = new Float64Array(1000);
let v4 = 3441;
let v5 = undefined;
[v4,,v5,...v0] = v3;
gc();
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 675 newly discovered edges in the CFG of the target
