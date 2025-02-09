const v0 = [NaN,118527.89483552473,-4.622803931465682e+307,0.8051248148171398];
const v1 = [Infinity,1000.0,-1.0684123029457544e+308,-4.114585382827619e+306,1000000000.0,-1000000000000.0,-3.0];
for (const v3 in v0) {
    v1[v3] %= 9;
}
gc();
// Imported program is interesting due to new coverage: 2497 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
