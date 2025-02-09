const v2 = new Int8Array(11);
try { JSON.parse(v2); } catch (e) {}
gc();
