for (let v1 = 0; v1 < 5; v1++) {
    const v3 = new Uint8Array();
    try {
        new BigUint64Array(v3);
    } catch(e5) {
    }
}
gc();
