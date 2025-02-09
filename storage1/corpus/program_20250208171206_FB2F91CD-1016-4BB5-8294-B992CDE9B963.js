const v0 = /[x\dz](r(x)(x)(x)\3(k(?:ab)+r(CP)))/ud;
function f1(a2) {
    const v5 = {
        [v0](a4) {
        },
        [v0]: a2,
    };
    return v5;
}
f1();
class C9 extends f1().constructor {
}
new C9();
gc();
// Imported program is interesting due to new coverage: 20 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 39 newly discovered edges in the CFG of the target
