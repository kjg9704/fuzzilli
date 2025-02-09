const v5 = new Uint8ClampedArray(44, 44, 44);
const v6 = ("-5032")[44];
try { new v6(...v5, 5, "boolean", Proxy, Uint8ClampedArray, ...v6); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 21 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
