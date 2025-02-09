class C2 {
    constructor(a4, a5, a6, a7) {
        try {
            super.p();
        } catch(e9) {
            e9.propertyIsEnumerable(a7);
        }
    }
}
new C2(255, 255, 12, 12);
gc();
