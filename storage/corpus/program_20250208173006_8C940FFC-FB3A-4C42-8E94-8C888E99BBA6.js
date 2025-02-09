for (let v0 = 0; v0 < 50; v0++) {
    const v1 = /(?:a+)?/dyv;
    function f2(a3, a4, a5, a6) {
        return { __proto__: v1 };
    }
    class C8 extends f2 {
    }
    const v9 = new C8();
    try { v9["toString"](); } catch (e) {}
}
gc();
