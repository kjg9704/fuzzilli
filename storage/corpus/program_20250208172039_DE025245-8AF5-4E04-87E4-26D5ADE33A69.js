async function f0(a1, a2, a3, a4) {
    try { a1(); } catch (e) {}
    const v6 = /a(ab|cde)[i()]/ug;
    await v6;
    return v6;
}
f0(f0);
gc();
// Imported program is interesting due to new coverage: 56 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
