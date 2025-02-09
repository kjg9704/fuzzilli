class C0 {
}
let v1 = 16;
let v2 = 554;
function f3() {
    return arguments;
}
[C0,v2,,...v1] = f3();
gc();
// Imported program is interesting due to new coverage: 40 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 42 newly discovered edges in the CFG of the target
