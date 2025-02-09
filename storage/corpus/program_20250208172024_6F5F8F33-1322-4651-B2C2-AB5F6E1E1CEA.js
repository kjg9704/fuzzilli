const v1 = `
    const t1 = 128;
    delete t1[v1];
    for (let v3 = 0; v3 < 10; v3++) {
        const t4 = 128;
        t4["p" + v3] = v3;
    }
`;
eval(v1);
gc();
// Imported program is interesting due to new coverage: 82 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
