try {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f3(a4, a5, a6, a7) {
        const t5 = {};
        t5.g = F1;
        return f3;
    }
    Int16Array(F1);
} catch(e10) {
}
gc();
