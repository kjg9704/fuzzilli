let v3;
try { v3 = ("number")["o"](); } catch (e) {}
("setUint8").indexOf(2.220446049250313e-16, v3);
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
