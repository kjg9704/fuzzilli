const v1 = [-Infinity,-2.220446049250313e-16,-3.2419530127038083e+307];
const v2 = [-1e-15,-1000000000.0,-1000000000000.0,1000000000000.0];
const v3 = [-2.0,2.2250738585072014e-308,-0.0,0.7305331466344601,1.7976931348623157e+308,-7.383066608991325e+307,-8.19980775984432e+307];
class C4 {
    #p(a6, a7, a8, a9) {
    }
    [-16608] = v2;
}
const v10 = new C4();
v1 - v10;
const v12 = { __proto__: v10, [C4]: v3 };
try { v12(); } catch (e) {}
const v14 = v10[v1];
try { v14(v14, v10, -16608, -16608, v2); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 442 newly discovered edges in the CFG of the target
