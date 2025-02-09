function f1() {
    return false;
}
function f2(a3) {
    return { a: false, [f1]: a3, [a3]: false };
}
const v5 = f2(f2);
f2();
let {"a":v7,"e":v8,"f":v9,...v10} = v5;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
