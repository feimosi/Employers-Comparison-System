jobCheck.test = (function() {
    var settings = jobCheck,
        fuzzifier = jobCheck.fuzzifier,
        completed = 0,
        passed = 0,
        failed = 0;
    var assertEquals = function(expected, value) {
        if(expected !== value) {
            console.error('#' + completed + ' Assertion fault. Expected: ' + expected + ' instead have: ' + value);
            failed++;
        } else
            passed++;
        completed++;
    }
    var summary = function() {
        console.info(completed + ' tests completed (' + failed + ' failed, ' + passed + ' passed)');
    }
    return {
        assertEquals: assertEquals,
        summary: summary
    }
})();

var test = jobCheck.test;

test.summary();