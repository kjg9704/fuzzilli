// Minimizing AAF16C21-D5D7-49BA-835E-B1C431462862
const v1 = Intl.Segmenter;
try { v1(v1); } catch (e) {}
for (let v3 = 0; v3 < 10; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f6(a7) {
        return v3;
    }
    Object.defineProperty(F4, 3, { configurable: true, enumerable: true, set: f6 });
    function f8() {
        return v1;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(f8, "then", { configurable: true, enumerable: true, value: f9 });
}
gc();
// Program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
