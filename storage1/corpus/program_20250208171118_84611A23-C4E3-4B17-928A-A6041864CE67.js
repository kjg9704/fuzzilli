const v2 = new Int8Array(2514);
const v5 = new BigUint64Array(4);
new BigUint64Array(0);
const v9 = [v2,v2,BigUint64Array];
const v10 = [v9,BigUint64Array,BigUint64Array,v9];
const v11 = [v9,4,v10,v2,v9];
const v12 = new Int8Array(v10);
const v14 = [2514,v11];
Reflect.apply(v12.toLocaleString, v5, v14);
let v17 = 0;
do {
    function f18() {
        return Reflect;
    }
    v17++;
} while (v17 < 2)
gc();
// Imported program is interesting due to new coverage: 22 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 33 newly discovered edges in the CFG of the target
