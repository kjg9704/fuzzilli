const v1 = [46536,-256,-827325232,-2147483649,-1,7,2034502697,268435441,-32928,3];
v1.__proto__ = Array;
const v2 = v1.constructor;
class C3 extends v2 {
}
new C3();
try { v2(Array, v1); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 114 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 26 newly discovered edges in the CFG of the target
