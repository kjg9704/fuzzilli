new BigInt64Array();
const v5 = new Uint16Array(99);
const v8 = new Uint8ClampedArray(154);
[BigInt64Array,Uint16Array,v5,v8];
[Uint8ClampedArray,77,Uint8ClampedArray,v5,v5];
for (const v11 of v8) {
    const v12 = delete v5[2];
    v11.g /= 99;
    const v13 = v12 instanceof Uint16Array;
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v13;
        this.d = v12;
    }
    new F14();
}
gc();
// Imported program is interesting due to new coverage: 308 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 41 newly discovered edges in the CFG of the target
