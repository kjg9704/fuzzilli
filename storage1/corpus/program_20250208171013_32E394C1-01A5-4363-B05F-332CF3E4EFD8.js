class C0 {
    static {
        try { this(C0); } catch (e) {}
    }
}
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
