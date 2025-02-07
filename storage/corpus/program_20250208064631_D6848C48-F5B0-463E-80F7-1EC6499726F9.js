// Minimizing D1890689-5F82-4BA7-BC99-4FF63F1DEE6B
const v1 = [268435439,3,-9223372036854775808,-841425245,-370629535,-65537,4096];
const v2 = [16];
v1.valueOf = v1;
let v4;
try {
const t0 = 7;
v4 = new t0(v2, 3168, v1, v2);
} catch (e) {}
[3168,v4];
gc();
// Program is interesting due to new coverage: 132 newly discovered edges in the CFG of the target
