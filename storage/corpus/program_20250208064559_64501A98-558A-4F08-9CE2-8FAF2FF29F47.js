// Minimizing E14F8200-C030-4F54-AF01-1CBA58BF1EAF
function f9(a10, a11, a12, a13) {
    const v17 = {
        142: "p",
        __proto__: "isSealed",
        get f() {
            super.g;
            a10.length;
        },
        f: "37920",
        g: "isSealed",
        [-4]: "isSealed",
        h: a12,
        [-2]: "-11814",
    };
    return v17;
}
const v19 = f9("p", -4, "p", f9("g", -4, "-11814", -268435456));
const v20 = f9("p", -4, "g", v19);
const v22 = Symbol.unscopables;
v20[v22] = f9;
v22.toString = f9;
for (let v23 = 0; v23 < 100; v23++) {
    f9("isSealed", -256, "function", v19);
}
f9("isSealed", -268435456, "37920", v22);
v20["p"] = v20;
const t27 = "-11814";
t27.toString = f9;
gc();
// Program is interesting due to new coverage: 3553 newly discovered edges in the CFG of the target
