const v1 = [];
function f2(a3, a4, a5, a6) {
    return { [a5]: v1, h: a3 };
}
for (let v8 = 0; v8 < 10; v8++) {
    f2();
}
v1["slice"]();
f2(-2, -65535, -65535);
gc();
// Imported program is interesting due to new coverage: 56 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 591 newly discovered edges in the CFG of the target
