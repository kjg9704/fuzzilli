const v0 = [1024,-1,11,-1,49142,10000,-9223372036854775807];
const v1 = [-39305,58941,2124398359,10798,-48814,-1799328683,255,-9];
const v2 = [-2395,-24620,781223593,840580185];
function f3(a4, a5) {
    const v8 = {
        ...v1,
        [v1](a7) {
            return a5;
        },
        ...a5,
        [v2]: v0,
    };
}
for (let v9 = 0; v9 < 100; v9++) {
    f3(f3, v2);
}
delete v1[v1];
let v12 = 10;
for (; v12--;) {
    let v15 = 2147483647;
    const v16 = v15--;
    Math.log(v16 - v16);
}
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
