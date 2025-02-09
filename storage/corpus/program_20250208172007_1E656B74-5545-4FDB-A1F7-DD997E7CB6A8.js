const v5 = {
    toString(a1, a2) {
        super["VZT"] = a2;
        a1();
        return "VZT";
    },
};
let v6;
try { v6 = v5.toString(); } catch (e) {}
const v8 = new BigUint64Array();
v8.subarray(v6, v6);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
