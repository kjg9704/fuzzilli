function f2(a3, a4, a5) {
    a4.substring(5, 5);
    try { Reflect.deleteProperty(a3); } catch (e) {}
}
for (let v9 = 0; v9 < 50; v9++) {
    f2(v9, "setFullYear");
}
gc();
