const v0 = [4.927944029336745e+307,-1.1035753504132187e+307];
function f2(a3) {
    return a3;
}
class C4 extends f2 {
}
C4.toString = Array;
const v6 = v0.forEach.constructor;
try { v6(C4); } catch (e) {}
const v11 = new Uint8ClampedArray(154);
for (const v12 of v11) {
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(this, "d", { writable: true, configurable: true, value: a16 });
        this.d = 99;
    }
    new F13(99, F13);
}
gc();
