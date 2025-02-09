global = 0;
function foo() {
    function bar() {
        let context_allocated = 0;
        const v6 = {};
        v6.e = v6;
        with (v6) {
            function f7() {
                global == global;
                ++global;
            }
            f = f7;
        }
        function baz() {
            return foo(context_allocated);
        }
        f.name;
        const v17 = f();
        v17 ?? v17;
    }
    bar();
}
foo ?? foo;
function f21() {
    return foo;
}
function f22() {
    return 0;
}
function f23(a24, a25, a26, a27) {
    a27.prototype = a27;
    const v32 = {
        get a() {
            Object.defineProperty(this, this, { enumerable: true, get: f21, set: f21 });
            throw global;
            a24[3860] = a25;
            /3/digv;
            /(?!(a))\1/musd;
            return /Z\P{Any}S(x)(x)(x)\2/uyg;
        },
        h: a24,
        __proto__: a26,
        d: global,
    };
    v32.b = v32;
    return v32;
}
try { f23(global, global, global, f22); } catch (e) {}
const v34 = f23(0, global, f23, f23);
const v35 = f23(v34, v34, v34, f22);
const v36 = f23(v35, v35, v35, v35);
v36.d = v36;
try { new WeakMap(); } catch (e) {}
new WeakMap();
class C40 {
    n(a42, a43) {
        super[this] = this;
        [];
        return f21;
    }
    c;
    static #c;
    static 129 = v34;
    [global];
    3152426977;
    static #b = WeakMap;
    static #f = global;
}
C40[129] = C40;
const v45 = new C40();
const v46 = new C40();
const v47 = new C40();
v47[3152426977];
class C49 {
}
try { C49.bind(foo); } catch (e) {}
class C51 {
}
try { C51.call(foo); } catch (e) {}
let v54 = 2147483647;
let v55 = 998260006;
v55 ^ v55;
Math.cbrt(foo);
v54++;
--v54;
const v60 = +foo;
v60 & v60;
const v62 = -v60;
v62 + v62;
--v55;
try { Array.isArray(WeakMap); } catch (e) {}
Array();
"prototype" == "prototype";
class C70 {
    p(a72, a73, a74) {
        const v75 = a74[a74];
        for (const v76 of "prototype") {
            try { v75(); } catch (e) {}
        }
    }
}
try { new C70(); } catch (e) {}
const v79 = new C70();
const v80 = v79.p;
try { v80(global, Array, v45); } catch (e) {}
const v83 = JSON.stringify(f21);
const v84 = JSON.stringify(v55);
const v85 = JSON.stringify(v46);
function f86(a87) {
    function f88(a89) {
        return Math.floor(0.25336697563960553 * a89);
    }
    const v96 = f88(a87.length);
    const v98 = a87.substring(0, v96);
    const v101 = a87.substring(v96 + 1);
    return (v98 + String.fromCharCode(a87.charCodeAt(v96) ^ 106)) + v101;
}
const v108 = JSON.parse(v85);
v108.f = v108;
const v109 = JSON.parse(v85);
v109.c = v109;
const v110 = JSON.parse(v84);
try { JSON.parse(v83); } catch (e) {}
const v112 = JSON.parse(v85);
v112.h = v112;
const v113 = JSON.parse(v85);
v113.h = v113;
function f115() {
}
const v118 = {
    g: foo,
    set c(a117) {
    },
};
function F119(a121, a122, a123) {
    if (!new.target) { throw 'must be called with new'; }
    a123 ?? a123;
}
const v125 = new F119();
new F119(v110, f21, v125);
let v127 = 6;
~(++v127);
gc();
