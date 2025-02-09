function f0() {
    const v5 = {
        a: "VbVGJ",
        get f() {
            super.g = super.h;
            return f0;
        },
        [-2.2250738585072014e-308]: "VbVGJ",
        ..."VbVGJ",
        d: -2.2250738585072014e-308,
    };
    return v5;
}
const v6 = f0();
function f7(a8, a9) {
    return { g: f0, [a9]: a9, ...v6 };
}
const v11 = f7(f0, v6);
const v12 = f7();
f7(v6, v12);
f7(v12, v12);
delete v11.a;
gc();
// Imported program is interesting due to new coverage: 93 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
