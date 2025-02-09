// Minimizing EBB0822D-AB22-476A-8661-6D3999FFE2B2
let v0 = 0;
function f1() {
    const v2 = {};
    with (v2) {
        function f3() {
            ++v0;
            return f1;
        }
        f = f3;
    }
    return f(v2);
}
JSON.parse(JSON.stringify([f1(),v0]));
gc();
// Program is interesting due to new coverage: 106 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 29 newly discovered edges in the CFG of the target
