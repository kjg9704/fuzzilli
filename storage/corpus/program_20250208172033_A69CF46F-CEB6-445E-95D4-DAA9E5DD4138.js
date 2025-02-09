const v0 = [];
function f1() {
    const v6 = {
        set a(a3) {
            const t0 = super.e;
            delete t0?.[v0];
        },
    };
    return v6;
}
const v7 = /R\p{Changes_When_NFKC_Casefolded}()q9\xf0\x9f\x92\xa9/musyi;
const v8 = /a\W/sdigv;
v7.exec();
const v11 = f1();
new f1(v8, ..."a");
v11.a &= v0;
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
