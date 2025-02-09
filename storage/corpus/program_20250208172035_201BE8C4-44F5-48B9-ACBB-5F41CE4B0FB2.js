const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
}
new F1();
new F1();
function f5(a6, a7, a8, a9) {
    const v10 = `
        const v12 = gc();
        const t10 = {};
        t10.b = v12;
        const v14 = {};
        v14.b = v12;
        v14.c = v12;
        const v15 = {};
        v15.b = v12;
        v15.c = v12;
        const v16 = {};
        v16.b = v12;
        v16.c = v12;
    `;
    eval(v10);
    return a9;
}
f5();
gc();
// Imported program is interesting due to new coverage: 63 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 44 newly discovered edges in the CFG of the target
