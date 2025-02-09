function f1(a2, a3, a4, a5) {
    const v8 = {
        set e(a7) {
            with ("buffer") {
            }
        },
    };
    return v8;
}
f1();
gc();
// Imported program is interesting due to new coverage: 35 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 193 newly discovered edges in the CFG of the target
