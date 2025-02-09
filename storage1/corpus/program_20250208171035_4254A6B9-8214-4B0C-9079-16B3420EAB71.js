const v2 = new Uint32Array(2);
for (const v3 in v2) {
    const v8 = new ArrayBuffer(2310, { maxByteLength: 2310 });
    new Uint8Array(v8);
}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
