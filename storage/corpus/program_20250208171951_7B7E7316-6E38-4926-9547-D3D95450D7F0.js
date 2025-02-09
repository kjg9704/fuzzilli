const v2 = /(?:a+)?/dyv;
function f3(a4, a5, a6, a7) {
    return { __proto__: v2 };
}
class C9 extends f3 {
}
const v10 = new C9();
const v11 = `
    try { v10["toString"](); } catch (e) {}
    ("MMD").split("object");
`;
eval(v11);
gc();
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
