// Minimizing 1DFF067E-A6B4-462B-B5AF-27CEE4AF9DD1
function foo() {
    function bar() {
        let context_allocated = 0;
        const v5 = {};
        function f6() {
        }
        f = f6;
        function baz() {
        }
        f();
    }
    bar();
}
foo();
function f13() {
    const v18 = {
        toString(a15, a16) {
            try {
            } catch(e17) {
            }
        },
    };
}
function f19() {
}
const v22 = new Uint32Array(Uint32Array, 1401223822n, 1401223822n);
try {
    v22.sort(1401223822n);
} catch(e24) {
}
function f25(a26) {
    function f27(a28) {
    }
}
for (let i = 0; i < 5; i++) {
    const v30 = [127,-65536];
    const v31 = [-9223372036854775808,257,21175,268435439,-14,-10579,256,24916,6];
    for (const v32 in "hasInstance") {
        [v30,v31,"hasInstance",..."hasInstance"];
    }
}
class C34 {
}
function f38(a39, a40, a41, a42) {
    const v43 = {};
}
const v44 = f38(BigInt64Array, BigInt64Array, Int8Array, 1);
const v45 = f38();
f38(1, v44, v45, v45);
gc();
// Program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
