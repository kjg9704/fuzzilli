class C0 {
}
const v3 = new Proxy(C0, {});
v3.__proto__;
gc();
// Imported program is interesting due to new coverage: 94 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
