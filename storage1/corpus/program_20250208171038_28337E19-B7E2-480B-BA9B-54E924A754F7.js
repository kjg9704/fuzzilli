const v3 = new Int8Array(1909);
if (0) {
} else {
    let [v4,v5,v6,v7] = v3;
    try { v6(0, Int8Array, v5, v6, v3); } catch (e) {}
    const v13 = new ArrayBuffer(10, { maxByteLength: 1122 });
    new DataView(v13);
}
gc();
// Imported program is interesting due to new coverage: 41 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 59 newly discovered edges in the CFG of the target
