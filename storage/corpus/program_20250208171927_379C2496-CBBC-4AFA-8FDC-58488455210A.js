function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
new F0();
const v7 = new Uint8ClampedArray(3445);
new Float32Array();
new Proxy(Uint8ClampedArray, {});
for (const v13 of v7) {
    v13.toString = v13;
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a18;
        this.b = a16;
    }
    new F14(3445, F14, v13);
    new F14(v2, v3, v13);
}
gc();
// Imported program is interesting due to new coverage: 165 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 539 newly discovered edges in the CFG of the target
