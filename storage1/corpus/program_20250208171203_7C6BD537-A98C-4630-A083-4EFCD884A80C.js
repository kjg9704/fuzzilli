const v0 = [2,-1024,36603,1159656262,-2147483648,3,6,2];
const v1 = [3,536870887,25980];
const v2 = [6,-15041,268435441,13,-1073741824,1,10,36376];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8, a9, a10) {
    return { ...v0, __proto__: a9, ...v2, [a10]: a10 };
}
const v12 = f7(v1, f7);
f7(v0, v12);
for (let v14 = 0; v14 < 25; v14++) {
    try {
        f7(v1, F3, v12);
    } catch(e16) {
    }
}
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
