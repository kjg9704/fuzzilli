for (let v0 = 0; v0 < 50; v0++) {
    const v2 = {
        valueOf() {
            return v0;
        },
    };
}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
