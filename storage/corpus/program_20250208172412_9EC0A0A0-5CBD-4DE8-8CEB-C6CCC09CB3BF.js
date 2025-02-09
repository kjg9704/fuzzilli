let v1 = 0;
const v2 = /foo.bar/;
const v5 = RegExp.prototype.exec;
function f6(a7) {
    return v1++ < 1000 ? v5.call(v2, a7) : null;
}
v2.exec = f6;
function f14() {
    return true;
}
v2.__defineGetter__("global", f14);
("foo*bar").match(v2);
gc();
