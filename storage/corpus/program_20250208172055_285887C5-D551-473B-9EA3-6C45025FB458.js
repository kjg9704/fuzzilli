let v2 = 1.7976931348623157e+308;
("number").slice(v2 >>= -5.0, 3);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
