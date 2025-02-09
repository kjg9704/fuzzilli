const v1 = new BigInt64Array();
const v4 = new Int16Array(226);
const v7 = new Int8Array(1);
function f8(a9, a10, a11, a12) {
    return { __proto__: v1, ...v7, ...v4 };
}
const v14 = f8(BigInt64Array, BigInt64Array, Int8Array, 1);
const v15 = f8();
f8(1, v14, v15, v15);
try { f8(...v14); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 152 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 72 newly discovered edges in the CFG of the target
