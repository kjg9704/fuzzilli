const v2 = ([])[Int8Array];
const v4 = new Float32Array(v2, v2, v2);
v4[2147483649] = v2;
gc();
