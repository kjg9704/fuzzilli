class C1 {
    static {
        this ** 2147483649;
    }
}
for (let i = 0; i < 5; i++) {
    const v8 = new ArrayBuffer(512, { maxByteLength: 512 });
    new Uint16Array(v8);
}
gc();
// Imported program is interesting due to new coverage: 31 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 13 newly discovered edges in the CFG of the target
