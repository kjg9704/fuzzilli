function f0() {
    return f0;
}
function f2() {
    return f2;
}
function f4() {
    delete arguments[f2];
    arguments.callee;
    return arguments;
}
f0[8] = f4();
try { new Uint8ClampedArray(f4, f0, Uint8ClampedArray, ...-1.3892792634712459e+308); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 20 newly discovered edges in the CFG of the target
