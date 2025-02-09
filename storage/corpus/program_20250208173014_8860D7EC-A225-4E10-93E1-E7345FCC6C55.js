function f0() {
    let v1 = {};
    with (v1) {
        function f2() {
            return ++v1;
        }
        f = f2;
    }
    f();
    return f0;
}
f0();
gc();
