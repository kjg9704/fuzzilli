function f0(a1) {
    return arguments;
}
const v3 = [f0,f0];
const v4 = f0();
const v6 = Object.preventExtensions(v4);
function f7(a8, a9, a10) {
    return a10;
}
v3.__proto__ = v4;
const v13 = new Uint16Array(14);
const v14 = { ...v4 };
delete v6.g;
try {
    v3.entries();
} catch(e17) {
}
const v19 = JSON.stringify(v13);
JSON.parse(JSON.stringify(14));
JSON.parse(v19);
v4[f7] = 14;
gc();
// Imported program is interesting due to new coverage: 210 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 262 newly discovered edges in the CFG of the target
