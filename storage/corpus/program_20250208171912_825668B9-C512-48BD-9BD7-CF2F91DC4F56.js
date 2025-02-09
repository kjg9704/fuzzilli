function f1() {
    return -4294967295;
}
const v2 = [1.0,-790945.7574155527,738226.0027143734,2.220446049250313e-16,-5.0,-2.7927279042460113e+307,-315225.02848641726];
([1000000.0,-1000000000000.0,0.9782520984531916,2.0]).slice(-4294967295, -4294967295);
v2[108] = f1;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
