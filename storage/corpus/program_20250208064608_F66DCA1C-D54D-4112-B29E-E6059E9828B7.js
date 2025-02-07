// Minimizing 98CC65F2-3FD3-4B5E-B69A-EC06FAF4C305
class C1 {
    ["L"];
}
function f6(a7, a8) {
    const v12 = {
        __proto__: C1,
        a: 2147483648n,
        o(a10, a11) {
            return a10;
        },
        65535: a8,
        g: 1e-15,
        d: a8,
        2147483647: -1000000.0,
    };
    return v12;
}
const v13 = f6(f6, -2031252236n);
function f14(a15, a16, a17) {
    const v18 = { a: -2031252236n, __proto__: "L", ...v13 };
    return a16;
}
f14(f14(f6, v13, -2031252236n), 1e-15, -1000000.0);
gc();
// Program is interesting due to new coverage: 179 newly discovered edges in the CFG of the target
