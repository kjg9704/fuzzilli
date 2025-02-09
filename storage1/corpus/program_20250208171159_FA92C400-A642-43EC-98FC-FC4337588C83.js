const v1 = new WeakMap();
const v4 = {
    get h() {
        v1.has(this);
        return v1;
    },
};
const v5 = { ...v4 };
gc();
// Imported program is interesting due to new coverage: 50 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
