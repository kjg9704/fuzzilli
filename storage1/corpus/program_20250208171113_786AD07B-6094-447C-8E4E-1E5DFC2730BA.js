const v0 = [6.491694689737951,370.7935670152949,196.84726374651063,2.2250738585072014e-308,752827.6987643372,842013.1897868982,2.799452201795482e+306,1000.0,979.4160539606814];
const v1 = [406610.56888079783,0.9252446523171467,1.1357956953465444e+308,3.0,639596.2458649767,-0.0,2.220446049250313e-16,661.1801138800481];
const v2 = [0.42216818758156827,5.0,NaN,-1.0358955369072689,-2.220446049250313e-16,8.167808751684298,2.0,1000000000000.0];
const v3 = [v2,v2,v1];
const v4 = [v3,v3];
const v5 = [v0,v0,v4];
const v6 = [v4,v2,v4,v5];
function f7(a8, a9, a10, a11) {
    const v12 = { [v6]: v3 };
    return v0;
}
f7(v0, v5, f7(v1, v1, v0, v1), v3);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
