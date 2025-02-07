// Minimizing AA8DB5FA-94F8-4F8B-A40F-8C76B3EC2C13
class C0 {
}
class C2 extends C0 {
}
const v4 = Symbol.split;
C2[v4];
const v6 = `
    let v7 = -4096 / C2;
    v7 **= v7;
    v4[Symbol] = Symbol;
`;
eval(v6);
gc();
// Program is interesting due to new coverage: 34 newly discovered edges in the CFG of the target
