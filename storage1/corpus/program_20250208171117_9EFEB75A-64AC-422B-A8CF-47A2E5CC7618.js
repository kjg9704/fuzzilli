function f0(a1) {
    const v6 = {
        get c() {
            const v5 = new Proxy(a1, {});
            return v5;
        },
    };
    return v6;
}
const v8 = f0(f0());
function f9() {
    return f9;
}
({"c":f9,} = v8);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
