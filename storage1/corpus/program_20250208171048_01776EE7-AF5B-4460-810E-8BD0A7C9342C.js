const v1 = [127,-65536];
const v2 = [-9223372036854775808,257,21175,268435439,-14,-10579,256,24916,6];
for (const v3 in "hasInstance") {
    [v1,v2,"hasInstance",..."hasInstance"];
}
gc();
// Imported program is interesting due to new coverage: 53 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 52 newly discovered edges in the CFG of the target
