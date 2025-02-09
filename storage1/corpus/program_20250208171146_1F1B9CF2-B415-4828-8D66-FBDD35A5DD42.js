function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new BigUint64Array(512, 512, 512);
const v7 = new Int16Array(64);
let v9 = 2147483649;
let v10 = v7.indexOf(v9, v9);
const v11 = [F0];
v10[v4.set(512, ...v11, 1826159620, v4, ...v11, 1826159620)] |= 1826159620;
({"c":v9,"length":F0,...v10} = v11);
v9 !== F0;
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
