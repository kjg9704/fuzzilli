class C0 {
}
const v3 = new Proxy(C0, {});
gc();
for (const v6 in v3) {
}
new v3();
gc();
