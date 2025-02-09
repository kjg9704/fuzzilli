// Minimizing E566C6F1-E570-4815-B724-8537BD4C0ABE
const t1 = Intl.Segmenter;
const v2 = new t1();
v2.segment();
const v5 = v2.segment();
v5.containing();
for (const v7 of v5) {
    gc();
}
class C10 {
}
function f11(a12) {
    return f11;
}
f11.toSource();
C10.valueOf = f11;
Int16Array.name;
const v17 = new Int32Array();
v17[0] = v17;
function f18(a19, a20) {
    function F21() {
        if (!new.target) { throw 'must be called with new'; }
    }
    ([F21]).toReversed();
    async function f25(a26, a27) {
        a26.valueOf();
        function f29() {
            return a19;
        }
        for (const v30 in f29) {
        }
        await f29;
    }
    f25(a20).catch(C10);
    return undefined;
}
const v35 = Symbol.iterator;
const v37 = {
    [v35]() {
    },
};
for (let v38 = 0; v38 < 100; v38++) {
    f18(v38, C10);
}
("function").replace(undefined, v5);
for (let v43 = 0; v43 < 50; v43++) {
    f18(v43, v17);
}
gc();
// Program is interesting due to new coverage: 148 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 439 newly discovered edges in the CFG of the target
