function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 11;
}
const v3 = new F0();
const v4 = { ...v3 };
const v9 = 9.22965176952654 / -32460;
Math.atanh(268435456);
Math.acosh(-32460);
v9 % -32460;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
