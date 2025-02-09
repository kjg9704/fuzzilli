const v1 = [];
const v2 = [v1,null,null,null,v1];
const v3 = [null,v1,null,null,v2];
let v4 = [1.7976931348623157e+308,1.0,0.8756246592133619];
const v6 = new WeakSet();
if (v6 != v4) {
    let {"e":v8,"g":v9,"length":v10,} = v1;
    try { new v9(v6, v8, v9, v1); } catch (e) {}
} else {
    v6[65536] = v2;
}
let v12;
try { v12 = v3.slice(v6); } catch (e) {}
v4 = v12;
gc();
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
