function f0(a1) {
    return arguments;
}
const v3 = [f0,f0,f0,f0,f0];
const v4 = f0(v3);
const v6 = Object.preventExtensions(v4);
v6.e = v6;
v3.__proto__ = v4;
function f7(a8, a9) {
    a9.length = a9;
    const v10 = { ...a8 };
    return a9;
}
f7(Object, v4);
f7(v4, f7);
for (let i = 0; i < 5; i++) {
    Reflect.deleteProperty([1000000000.0,-413230.6905621905,0.6911236236461515,409272.7639630025,-1.7515670060748565e+308,1000000000.0,-354823.27702896006,2.220446049250313e-16,-1000000000.0,0.9514913329751643], 256n);
    65535n < 65535n;
}
gc();
