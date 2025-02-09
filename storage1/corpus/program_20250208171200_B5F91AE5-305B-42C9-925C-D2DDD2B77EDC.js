for (let i = 0; i < 5; i++) {
    const v1 = `1645374161${268435441}string`;
    v1[v1] *= 268435441;
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
