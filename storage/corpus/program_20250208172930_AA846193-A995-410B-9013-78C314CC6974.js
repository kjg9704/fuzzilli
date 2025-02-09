Int8Array[Symbol.toPrimitive] = gc;
const v5 = ["symbol",Int8Array];
new Int8Array({ __proto__: v5 });
gc();
