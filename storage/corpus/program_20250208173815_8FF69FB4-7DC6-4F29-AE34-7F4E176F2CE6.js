class C0 {
}
const v4 = new Proxy(C0, {});
for (let i = 0; i < 2; i++) {
    function f5() {
        ("h")[536870912];
        gc();
        return f5;
    }
    f5();
    f5();
    for (let v11 = 0; v11 < 50; v11++) {
        for (const v12 of "h") {
            v4.f;
        }
    }
}
gc();
