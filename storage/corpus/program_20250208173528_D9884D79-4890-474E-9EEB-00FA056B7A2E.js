function f0(a1, a2, a3) {
    const v4 = /a??/mdyv;
    with (7) {
        let v6;
        try { v6 = v4(7, a2); } catch (e) {}
        v6 ?? v6;
    }
    return f0;
}
("a")[0];
for (let v10 = 0; v10 < 25; v10++) {
    f0();
}
gc();
