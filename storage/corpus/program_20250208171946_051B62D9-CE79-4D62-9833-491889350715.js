let v1 = 0;
const v2 = /foo.bar/;
const v4 = RegExp.prototype;
const v5 = v4.exec;
function f6(a7) {
    return v1++ < 1000 ? v5.call(v2) : null;
}
v2.exec = f6;
function f14() {
    return true;
}
const v16 = v2.__defineGetter__("global", f14);
const v18 = ("foo*bar").match(v2);
function f19(a20, a21, a22) {
    f6 + f6;
    class C24 {
    }
    class C26 extends Map {
    }
    delete C26[5];
    const v38 = {
        p(a29, a30, a31, a32) {
            super[v1];
            RegExp(a29);
            [850770.3375675951,1.4516266018208483e+308,-1000000000000.0,723679.1589048158,-1000.0,-7.44511950524829e+306,-1000000.0,1.5181326014125368e+307,-0.0];
            [-1.2590416457493348e+308,3.0,-2.0,0.7840177463236284,1000000.0,0.46379978199776395];
            [6.457011204747949e+307,-2.220446049250313e-16,-2.220446049250313e-16];
            return v1;
        },
        f: f6,
        e: v4,
    };
    return v38;
}
const v39 = f19("foo*bar", 1000, v5);
f19(v18, 1000, "global");
const v41 = [f6];
const v42 = [v1,v39];
[v18,v39,v4,v1,v16];
class C44 extends f19 {
    static o(a46, a47) {
        const v48 = new f6(a47);
        v48 ** 1000;
        f19("global", 1000, "global");
        return a46;
    }
    set a(a52) {
        this.length = 66;
        const v54 = [0.8148515571419126,-479.8587055799402];
        const v56 = new Float64Array();
        v56[v54];
        [true];
        const v60 = super.p(this, v18, 66);
        v5.n(v1, 66, v60, a52, v60);
    }
    static [v5];
}
new C44();
const v63 = new C44();
const v64 = new C44();
class C65 extends RegExp {
    #valueOf(a67, a68, a69, a70) {
        Object.defineProperty("global", "g", { enumerable: true, value: a67 });
        Date();
        function F73(a75, a76, a77) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v4;
            this.b = v63;
            this.d = v64;
        }
        F73(v16, this, v5);
        F73(v42, v42, v41);
        F73(a67, v2, a67);
        return v4;
    }
}
new C65();
new C65();
new C65();
const v84 = [-2.220446049250313e-16,-1.7976931348623157e+308,0.6328399915605228,-1.963765079793414e+307];
const v85 = [-7.718470427619161e+307,4.0,-Infinity,0.0];
function f87(a88) {
    const v105 = {
        g: true,
        get d() {
            v42();
            class C91 {
            }
            const v92 = new C91();
            C91.__proto__ = v92;
            `268435456${C91}-8262`;
            WeakSet();
            BigInt64Array(7);
            Uint8ClampedArray(140);
            Int8Array(1339);
            return a88;
        },
    };
    return v105;
}
f87(v84);
new BigInt64Array(67);
for (let v112 = 0; v112 < 5; v112++) {
    v112 < 7;
    b = v112;
    b = 65536;
    for (let v116 = 0; v116 < 5; v116++) {
        f87(v85);
    }
    const v120 = new Float64Array();
    v120[2930409599] <<= 1024;
    const v121 = /a\bc/mdv;
    const v122 = [4,-15,-14,-11,129,71124534,65537,-4294967297];
    let v124 = 0;
    for (let i = 0; i < 5; i++) {
        v124 < 3;
        -2147483647 - v121;
        v122.entries();
        v124++;
    }
    v112++;
}
try {
} catch(e131) {
}
0 != false;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
