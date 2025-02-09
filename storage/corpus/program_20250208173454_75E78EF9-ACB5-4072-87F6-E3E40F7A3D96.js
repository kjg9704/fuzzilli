function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    with (v7) {
    }
}
try { F0(); } catch (e) {}
gc();
