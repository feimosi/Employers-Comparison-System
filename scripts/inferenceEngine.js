jobCheck.inferenceEngine = (function() {
    var ruleBase = jobCheck.ruleBase,
        result = [];

    var getResult = function() {
        return result;
    }

    var processInput = function(fuzzySets) {
        result = [];
        for(var salary in fuzzySets['salary']) {
            for(var distance in fuzzySets['distance']) {
                for(var size in fuzzySets['size']) {
                    // Save values as numbers
                    var salaryV = +fuzzySets['salary'][salary],
                        distanceV = +fuzzySets['distance'][distance],
                        sizeV = +fuzzySets['size'][size];
                    // If input is an element of the fuzzy set ( > 0)
                    if(salaryV !== 0 && distanceV !== 0 && sizeV !== 0)
                        result.push({
                            output: ruleBase.determineOutput(salary, distance, size),
                            value: Math.min(salaryV, distanceV, sizeV)
                        });
                }
            }
        }
        return result;
    };

    return {
        getResult: getResult,
        processInput: processInput
    };
})();