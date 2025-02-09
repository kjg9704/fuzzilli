const v2 = new Uint8Array(1802);
for (const v3 in v2) {
    const v8 = new SharedArrayBuffer(1, { maxByteLength: 7 });
    new Uint8Array(v8);
}
gc();
// Imported program is interesting due to new coverage: 158 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
