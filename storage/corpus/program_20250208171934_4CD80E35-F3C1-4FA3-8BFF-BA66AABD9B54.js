class C2 {
}
const v3 = ["undefined"];
class C4 extends C2 {
}
const t5 = "undefined";
t5.__proto__ = C4;
C2 << v3;
("trimLeft").padStart();
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
