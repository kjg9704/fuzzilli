function f0() {
    return {};
}
const v2 = f0();
const v3 = f0();
const v4 = f0();
class C5 {
}
const v6 = new C5();
const v7 = new C5();
class C8 {
    constructor(a10, a11, a12) {
        const v13 = `
            const v15 = v2.__proto__;
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = this;
                this.c = a10;
                this.a = a20;
            }
            const v21 = new F16(v6, v6, v15);
            const v22 = new F16(v21, a10, v21);
            new F16(v7, v7, v22);
        `;
        eval(v13);
    }
}
new C8(v6, v4, v3);
try {
} catch(e27) {
}
gc();
// Imported program is interesting due to new coverage: 52 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 42 newly discovered edges in the CFG of the target
