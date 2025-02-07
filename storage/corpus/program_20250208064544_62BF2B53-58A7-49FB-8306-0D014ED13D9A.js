// Minimizing 4EEB5E4C-E66C-465E-85A3-70079F8F3248
function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4294967296;
}
const v3 = new F0();
const v4 = [-52381,-1,7997,21000,7,127,-128,128,11025,3];
const v5 = [-4096,-16,-70026550,31304];
const v6 = [-27979,414046126];
const v7 = [NaN,2.0];
[0.7149831095040049,-2.0,5.0,-Infinity,0.5071482093568922,1000.0];
const v9 = [-1000000000.0];
function f10(a11, a12) {
    const v20 = {
        [v5](a14, a15) {
            function* f16(a17, a18) {
                yield v5;
                return a15;
            }
        },
    };
    return v20;
}
f10(v9);
f10(v4, v3);
try {
    const v23 = [v4,v5,v4,v6];
    new f10({ h: v23 }, v23);
} catch(e26) {
}
v7.length = 2;
gc();
// Program is interesting due to new coverage: 404 newly discovered edges in the CFG of the target
