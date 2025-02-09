const num_iterations = 1000;
let i = 0;
const re = /foo.bar/;
try { RegExp(RegExp, num_iterations); } catch (e) {}
const v8 = RegExp.prototype;
try { v8.test(RegExp); } catch (e) {}
const v10 = v8.exec;
try { v10.call(num_iterations); } catch (e) {}
const RegExpPrototypeExec = v10;
const v14 = () => {
};
try { v14.toSource(); } catch (e) {}
const v16 = re.__defineGetter__("global", v14);
v16 ?? v16;
const v19 = ("foo*bar").match(re);
function f20(a21, a22, a23) {
}
const v27 = [v19,f20("foo*bar", 1000, RegExpPrototypeExec),f20("global", 1000, v8),i,v16];
try { v27.fill(num_iterations); } catch (e) {}
class C29 extends f20 {
    static [RegExpPrototypeExec];
}
const v30 = new C29();
const v31 = new C29();
try { v31.f(i); } catch (e) {}
class C33 extends RegExp {
    #valueOf(a35, a36, a37, a38) {
    }
}
const v39 = new C33();
const v40 = v39?.constructor;
try { v40(); } catch (e) {}
new C33();
const v43 = [-2.220446049250313e-16,-1.7976931348623157e+308,0.6328399915605228,-1.963765079793414e+307];
try { v43.values(); } catch (e) {}
const v45 = [-7.718470427619161e+307,4.0,-Infinity,0.0];
function f47(a48) {
    a48.copyWithin(f47, v30);
    const v52 = {
        g: true,
        get d() {
            class C51 {
            }
            return a48;
        },
    };
    v52.toLocaleString();
}
for (let i56 = 0; 7 == 7, i56 < 7; i56++) {
    i56 % i56;
    b = i56;
    b = 65536;
    for (let v65 = 0; v65 < 100; v65++) {
        v65 >>> v65;
        f47(v45);
    }
    const v70 = new Float64Array();
    v70[2930409599] <<= 1024;
    const v71 = /a\bc/mdv;
    const v72 = [4,-15,-14,-11,129,71124534,65537,-4294967297];
    let v74 = 0;
    while ((() => {
            const v76 = v74 < 3;
            v76 || v76;
            return v76;
        })()) {
        -2147483647 - v71;
        v72.entries();
        v74++;
    }
}
try {
} catch(e81) {
}
const v84 = 0 != false;
v84 || v84;
gc();
// Imported program is interesting due to new coverage: 266 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 750 newly discovered edges in the CFG of the target
