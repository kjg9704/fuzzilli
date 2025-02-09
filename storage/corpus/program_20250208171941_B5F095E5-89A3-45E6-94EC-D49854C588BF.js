const v5 = new Uint8Array(3514);
function f7(a8, a9, a10, a11) {
    const v12 = new Uint8Array(a8);
    let v13;
    try { v13 = a8(v12, ...v5, 12, 202, a9, ...Float64Array); } catch (e) {}
    [v13];
    return Float64Array;
}
f7(Int16Array);
gc();
// Imported program is interesting due to new coverage: 35 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
