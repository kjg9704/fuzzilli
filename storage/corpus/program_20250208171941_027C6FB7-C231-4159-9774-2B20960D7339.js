// Minimizing 25EF0192-6319-4DD5-954D-66896F96CE65
try {
    Wasm.instantiateModuleFromAsm();
} catch(e2) {
    print(e2);
}
const v8 = new Int16Array(4062);
function f9(a10) {
}
const v13 = [f9,268435456];
Reflect.apply(("prototype").split, v8, v13);
const v16 = `
    gc();
`;
eval(v16);
for (let v21 = 0; v21 < 5; v21++) {
}
gc();
// Program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
