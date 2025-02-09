const v0 = [-18046,-65535,13,536870912];
class C1 {
}
const v2 = `
    try { C1(...v0, C1, C1, ...v0); } catch (e) {}
`;
eval(v2);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 245 newly discovered edges in the CFG of the target
