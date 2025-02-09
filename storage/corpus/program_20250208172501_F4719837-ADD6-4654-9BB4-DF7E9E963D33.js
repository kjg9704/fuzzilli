const v3 = new BigInt64Array(4096);
const v6 = new Uint8Array(64);
const v8 = new BigUint64Array(14);
const v10 = { ...v3, ...v8, f: 129, ...v6 };
gc();
