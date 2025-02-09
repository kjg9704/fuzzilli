for (let v0 = 0; v0 < 5; v0++) {
    const v5 = new SharedArrayBuffer(169, { maxByteLength: 169 });
    new Int8Array(v5);
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
