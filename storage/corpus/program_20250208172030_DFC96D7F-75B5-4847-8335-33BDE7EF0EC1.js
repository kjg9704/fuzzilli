function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
const v5 = [];
Reflect.apply(("setPrototypeOf").endsWith, C3, v5).f;
gc();
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
