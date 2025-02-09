const v1 = [-7,-2147483649,2093810579,-6047,-9223372036854775808,-13,9,1895690820,10000,4];
const v4 = new Proxy(v1, {});
v4[v4] = 10000n;
gc();
// Imported program is interesting due to new coverage: 37 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 73 newly discovered edges in the CFG of the target
