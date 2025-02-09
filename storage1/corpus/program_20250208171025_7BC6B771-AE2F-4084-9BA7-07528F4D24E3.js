const num_iterations = 1000;
let i = 0;
const re = /foo.bar/;
const v7 = RegExp.prototype;
const v8 = v7.exec;
const RegExpPrototypeExec = v8;
function gaga(a11) {
    return i++ < num_iterations ? RegExpPrototypeExec.call(re, a11) : null;
}
re.exec = gaga;
const v18 = () => {
    return true;
};
const v20 = re.__defineGetter__("global", v18);
const v22 = ("foo*bar").match(re);
function f23(a24, a25, a26) {
    gaga + gaga;
    class C28 {
    }
    class C30 extends Map {
    }
    delete C30[5];
    const v45 = {
        p(a33, a34, a35, a36) {
            super[0];
            RegExp(a33);
            [850770.3375675951,1.4516266018208483e+308,-1000000000000.0,723679.1589048158,-1000.0,-7.44511950524829e+306,-1000000.0,1.5181326014125368e+307,-0.0];
            [-1.2590416457493348e+308,3.0,-2.0,0.7840177463236284,1000000.0,0.46379978199776395];
            [6.457011204747949e+307,-2.220446049250313e-16,-2.220446049250313e-16];
            return 0;
        },
        f: gaga,
        e: v7,
    };
    return v45;
}
const v46 = f23("foo*bar", 1000, RegExpPrototypeExec);
f23(v22, 1000, "global");
const v48 = f23("global", 1000, v7);
const v49 = [gaga];
const v50 = [0,v46];
[v22,v46,v48,i,v20];
class C53 extends f23 {
    static o(a55, a56) {
        const v57 = new gaga(a56);
        v57 ** num_iterations;
        f23("global", 1000, "global");
        return a55;
    }
    set a(a61) {
        this.length = 66;
        const v63 = [0.8148515571419126,-479.8587055799402];
        const v65 = new Float64Array();
        v65[v63];
        [true];
        const v69 = super.p(this, v22, 66);
        try { v8.n(0, 66, v69, a61, v69); } catch (e) {}
    }
    static [RegExpPrototypeExec];
}
new C53();
const v72 = new C53();
const v73 = new C53();
class C74 extends RegExp {
    #valueOf(a76, a77, a78, a79) {
        Object.defineProperty("global", "g", { enumerable: true, value: a76 });
        new Date();
        function F82(a84, a85, a86) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v7;
            this.b = v72;
            this.d = v73;
        }
        new F82(v20, this, RegExpPrototypeExec);
        new F82(v50, v50, v49);
        new F82(a76, re, a76);
        return v7;
    }
}
new C74();
new C74();
new C74();
const v93 = [-2.220446049250313e-16,-1.7976931348623157e+308,0.6328399915605228,-1.963765079793414e+307];
const v94 = [-7.718470427619161e+307,4.0,-Infinity,0.0];
function f96(a97) {
    const v111 = {
        g: true,
        get d() {
            try { new v50(); } catch (e) {}
            new WeakSet();
            new BigInt64Array(7);
            new Uint8ClampedArray(140);
            new Int8Array(1339);
            return a97;
        },
    };
    return v111;
}
f96(v93);
const v116 = new BigInt64Array(67);
for (let i118 = 0; i118 < 7; i118++) {
    b = i118;
    v116.length &= b = 65536;
    for (let v125 = 0; v125 < 100; v125++) {
        f96(v94);
    }
    const v129 = new Float64Array();
    v129[2930409599] <<= 1024;
    const v130 = /a\bc/mvd;
    const v131 = [4,-15,-14,-11,129,71124534,65537,-4294967297];
    let v133 = 0;
    while (v133 < 3) {
        -2147483647 - v130;
        v131.entries();
        v133++;
    }
}
try {
} catch(e139) {
}
0 != false;
gc();
// Imported program is interesting due to new coverage: 459 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1031 newly discovered edges in the CFG of the target
