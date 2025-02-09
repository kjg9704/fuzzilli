with ([1000.0,-112240.89557028201,2.846140183059821e+306,-484.83443832700175,0.46645298786051614,1000.0,8.166039677873115e+307,-1.6379242372877237e+308]) {
    function f1(a2, a3) {
        return a3;
    }
    new Promise(f1);
}
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
