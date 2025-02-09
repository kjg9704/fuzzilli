const v0 = `
    function f1() {
        return f1;
    }
    ("b").search(f1);
    class C4 {
    }
    function f5(a6, a7) {
        Int16Array(a6, a7, C4);
        return f5;
    }
`;
eval(v0);
gc();
