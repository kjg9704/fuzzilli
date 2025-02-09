const v0 = [-16,1412537648,-12,-13,-65537,2147483649,13];
const v2 = [[-1031961989,0,268435440,65536,3635,1073741825,9007199254740990,-14,2717]];
const v5 = new Map();
function f6(a7, a8) {
    const v10 = {
        ...a7,
        [v2]: 3.071159357564925,
        __proto__: a8,
        a: v5,
        get f() {
            return this;
        },
        [a7]: a7,
        128: v0,
        ...v2,
    };
    return v10;
}
f6();
f6(f6(Map, v2));
const v14 = { ...v5 };
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 276 newly discovered edges in the CFG of the target
