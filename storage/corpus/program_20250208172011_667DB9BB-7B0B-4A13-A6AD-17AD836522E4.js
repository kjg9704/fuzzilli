const v0 = [4,-2147483648,512,4096];
class C1 {
}
const v3 = [C1,C1];
Reflect.apply(v0.reverse, C1, v3);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
