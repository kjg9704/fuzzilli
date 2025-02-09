const v2 = new Float64Array(11);
const v5 = new BigInt64Array(64);
function f6(a7, a8, a9, a10) {
    const v11 = { ...v2, ...v5 };
}
f6();
f6();
Reflect.construct(BigInt64Array, [v5]);
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 18 newly discovered edges in the CFG of the target
