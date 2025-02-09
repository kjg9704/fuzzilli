function f0() {
    const v4 = {
        ..."undefined",
        c: 0.797919393385618,
        ..."undefined",
        e: 0.797919393385618,
        ["undefined"]: "undefined",
        h: "undefined",
        ..."undefined",
        __proto__: "undefined",
        g: -1000000000.0,
    };
    return v4;
}
const v5 = f0();
new Int8Array(14);
for (let v10 = 0; v10 < 100; v10++) {
    f0();
}
function f12(a13, a14, a15, a16) {
    const v17 = { b: Int8Array, ...a14, ...a14, 5: v5 };
}
f12();
f12(195, v5, v5);
f12(14, f0, v5, 195);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 64 newly discovered edges in the CFG of the target
