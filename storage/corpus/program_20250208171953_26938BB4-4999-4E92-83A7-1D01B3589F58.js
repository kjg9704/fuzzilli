const v0 = /Bexyz{1,}?/;
let v1 = 9007199254740991n;
let v2 = [4.393571509823948,-2.220446049250313e-16,1000.0,-1000000000.0,0.1153767146022403,-4.0,-2.1988772641695657,1.0];
[undefined,v2,v1] = [-1000000000.0,8.678768454453753e+307,1.0,1.7976931348623157e+308,4.0,Infinity,-2.2250738585072014e-308,-0.0];
for (let v5 = 0; v5 < 25; v5++) {
    v0.exec();
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
