const v3 = new Uint8Array(2);
class C4 extends Uint32Array {
    [Uint32Array] = v3;
}
const v5 = new C4();
const v7 = JSON.stringify(v5);
JSON.parse(v7);
JSON.parse(v7);
gc();
