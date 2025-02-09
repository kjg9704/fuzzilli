// Minimizing F7E0A89A-892D-4713-AF3D-3BA8339598DF
const v1 = new Int16Array();
for (let v3 = 0; v3 < 5; v3++) {
    v1[2147483648] = v3;
}
gc();
// Program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
