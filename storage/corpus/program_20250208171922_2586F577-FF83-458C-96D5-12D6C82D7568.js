const v2 = new Uint8ClampedArray(2974);
function f4(a5, a6, a7, a8) {
    const v9 = { ...v2, __proto__: BigInt64Array, ...v2 };
    return a8;
}
f4(v2, v2, 2974, 2974);
f4();
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
