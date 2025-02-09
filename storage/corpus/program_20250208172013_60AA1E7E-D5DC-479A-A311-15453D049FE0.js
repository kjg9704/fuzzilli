function f0() {
    let v2 = 2147483647;
    const v5 = {
        1073741824: -1671033414,
        c: v2,
        get f() {
            v2 = -1671033414;
        },
        3677: -1671033414,
        ["r9"]: -1671033414,
        [v2]: "r9",
    };
}
const v8 = new Uint16Array(134);
v8.reduceRight(f0, Uint16Array);
new Proxy(Float64Array, {});
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
