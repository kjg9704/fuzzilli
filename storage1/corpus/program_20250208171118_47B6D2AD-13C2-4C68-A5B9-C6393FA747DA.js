function f1(a2, a3) {
    const v8 = {
        ...a3,
        set e(a5) {
        },
        set b(a7) {
        },
    };
    return v8;
}
f1(undefined, f1());
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
