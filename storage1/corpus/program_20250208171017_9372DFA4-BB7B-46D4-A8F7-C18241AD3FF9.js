const v1 = delete Int16Array.byteOffset;
const v2 = v1.__proto__;
try { v1.o(); } catch (e) {}
function f4(a5) {
    return f4;
}
class C6 extends f4 {
    [v2];
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 30 newly discovered edges in the CFG of the target
