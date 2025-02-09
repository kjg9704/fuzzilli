function f0() {
    return f0;
}
const v1 = [f0];
function f2(a3) {
    const v9 = {
        __proto__: v1,
        valueOf(a5, a6) {
            const t0 = a3.__proto__;
            t0.length = 2738;
            return a3;
        },
    };
    return v9;
}
f2(v1) ^ 3755;
Math.sinh(Math);
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
