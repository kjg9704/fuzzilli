const v2 = {
    set f(a1) {
    },
};
let v3 = [1073741823,-5,1215796805,14704,-2,9,24939,7,4294967297,64];
const v5 = new Map();
({"h":v3,"size":Map,} = v5);
const v8 = new Proxy(v2, {});
v8.f;
gc();
// Imported program is interesting due to new coverage: 21 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 210 newly discovered edges in the CFG of the target
