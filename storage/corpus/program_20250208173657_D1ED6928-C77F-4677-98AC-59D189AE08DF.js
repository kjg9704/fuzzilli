for (let v1 = 0; v1 < 1250; v1++) {
    function f2() {
        return f2;
    }
    Reflect.construct(Uint16Array, Uint16Array);
}
gc();
