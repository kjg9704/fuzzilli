function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -14;
}
const v6 = new Uint16Array(1576);
const v7 = [Int16Array];
const v8 = [F0,1576];
[v8];
for (let v10 = 0; v10 < 5; v10++) {
    try { v10(v10, v10, v7); } catch (e) {}
}
new Int16Array(...v6, v6, ...v7);
try { v8.sort(F0); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 30 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
