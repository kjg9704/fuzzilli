function f3(a4, a5) {
    const v11 = {
        [14](a7, a8) {
            eval("bigint");
        },
    };
    return v11;
}
("bigint").includes(f3("getUint32"));
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
