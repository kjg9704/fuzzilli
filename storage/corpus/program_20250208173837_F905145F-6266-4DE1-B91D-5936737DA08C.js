class C0 {
    static #d;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(-9223372036854775808n);
const v10 = new Uint16Array();
const v12 = new Uint16Array(3772);
const v14 = new Uint8ClampedArray(v7, 3772);
v14["subarray"](...v10, ..."subarray", -15n, Uint16Array, ...v12);
for (const v17 of v14) {
}
gc();
