function f0(a1, a2, a3, a4) {
    const v15 = {
        m(a6, a7, a8) {
            function f9(a10, a11, a12) {
                return arguments;
            }
            return f9();
        },
    };
    return v15;
}
const v18 = f0()["m"]();
for (let v19 = 0; v19 < 5; v19++) {
    v18["p"] = v19;
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
