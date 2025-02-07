// Minimizing 40316EBC-C927-4270-8360-6D4D3E7BBD55
function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -12;
    this.e = -12;
    this.c = -12;
}
new F0();
new F0();
const v5 = new F0();
const v7 = new Set();
const v8 = /rfoo(?<=bar)baz/m;
const v9 = /(\w|\d)/gumdi;
const v10 = /[I]/gmvi;
class C11 {
    static #e = v5;
    h;
    static valueOf(a13, a14, a15, a16) {
        v8.flags;
        [-13,1073741825];
        [-25983,65537,-4294967297,4294967296,268435439];
        [-1310738258,65536,-4,-128,2147483649,-76,-4294967297,15];
        return a13;
    }
    [v10];
    d;
    static [F0];
    static e;
    g = v9;
    [-1] = v5;
}
const v21 = new C11();
new C11();
const v23 = new C11();
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
    this.c = v8;
}
new F24(v23, v21, v10);
const v30 = new F24(v23, v21, v8);
new F24(v23, v21, v10);
const v32 = new F0();
v7[v30] = v32;
[8,0];
[1073741824,2];
[65536,-1073741824,11,41768,1073741824,-37128,2147483647];
let v36 = 0;
while (v36 < 4) {
    const v39 = [v23,v30,C11];
    [[v39],v39];
    v36++;
}
gc();
// Program is interesting due to new coverage: 120 newly discovered edges in the CFG of the target
