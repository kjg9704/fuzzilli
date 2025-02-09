for (let v0 = 0; v0 < 5; v0++) {
    const v5 = new ArrayBuffer(3, { maxByteLength: 3 });
    new BigInt64Array(v5);
}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
