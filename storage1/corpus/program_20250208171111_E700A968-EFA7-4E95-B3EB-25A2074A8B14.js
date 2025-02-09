const v2 = new Uint16Array();
const v4 = new Uint16Array(3772);
const v6 = new Uint8ClampedArray();
v6["subarray"](...v2, ..."subarray", -15n, Uint16Array, ...v4);
gc();
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
