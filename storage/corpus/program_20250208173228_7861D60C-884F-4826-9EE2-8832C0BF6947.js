const v2 = new Int32Array(512);
try { v2.sort(Int32Array); } catch (e) {}
gc();
