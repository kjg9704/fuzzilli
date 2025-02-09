class C1 {
}
const v2 = new C1();
class C3 extends C1 {
}
const v4 = new C3();
const v7 = [["caller","d"]];
function f8(a9, a10, a11, a12) {
    async function* f13(a14, a15) {
        await v7;
        yield v7;
    }
    f13(a11, v7);
    new Uint8ClampedArray();
    try {
        eval("boolean");
    } catch(e24) {
    }
}
for (let v25 = 0; v25 < 25; v25++) {
    f8(v25, v2, v4);
}
gc();
