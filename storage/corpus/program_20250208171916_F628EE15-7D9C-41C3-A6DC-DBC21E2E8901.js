let v2 = new Uint8ClampedArray(4);
let v3 = 1;
const v5 = new Uint8Array(v3);
new BigUint64Array(1);
let v11 = "4";
({"e":v3,"length":v2,} = v11);
--v11;
let v13 = 0;
do {
    try {
        new Uint8ClampedArray(v5, v13, -1073741824);
    } catch(e16) {
    }
    v13++;
} while (v13 < 8)
gc();
// Imported program is interesting due to new coverage: 45 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
