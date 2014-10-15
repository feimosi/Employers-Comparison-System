jobCheck.fuzzifier = (function() {
    var settings = jobCheck.settings,
        sA = settings.salary * 0.5, 
        sB = settings.salary, 
        sC = settings.salary * 2,
        distance = settings.distance,
        dA = distance / 3,
        dB = distance * 3,
        siA = Math.pow(settings.size, 0.5),
        siB = settings.size,
        siC = Math.pow(settings.size, 1.5);

    var fuzzySets = [];

    var membershipFunctions = {
        salary: {
            low: function(x) {
                return x < sA ? 1 : x > sB ? 0 : (sB - x) / (sB - sA);
            },
            moderate: function(x) {
                return x < sA || x > sC ? 0 
                    : x < sB ? (x - sA) / (sB - sA)
                    : (sC - x) / (sC - sB);
            },
            high: function(x) {
                return x > sC ? 1 : x < sB ? 0 : (x - sB) / (sC - sB);
            }
        },
        distance: {
            near: function(x) {
                return x < dA ? 1 : x > dB ? 0 : (dB - x) / (dB - dA);
            },
            far: function(x) {
                return x < dA ? 0 : x > dB ? 1 : (x - dA) / (dB - dA);
            }
        },
        size: {
            small: function(x) {
                return x < siA ? 1 : x > siB ? 0 : (siB - x) / (siB - siA);
            },
            medium: function(x) {
                return x < siA || x > siC ? 0 
                    : x < siB ? (x - siA) / (siB - siA)
                    : (siC - x) / (siC - siB);
            },
            big: function(x) {
                return x > siC ? 1 : x < siB ? 0 : (x - siB) / (siC - siB);
            }
        }
    };

    var updateSettings = function() {
        settings = jobCheck.settings;
        sA = settings.salary * 0.5;
        sB = settings.salary; 
        sC = settings.salary * 2;
        distance = settings.distance;
        dA = distance / 3;
        dB = distance * 3;
        siA = Math.pow(settings.size, 0.5);
        siB = settings.size;
        siC = Math.pow(settings.size, 1.5);
    }

    var printFuzzySets = function() {
        console.log(fuzzySets);
        return fuzzySets;
    }

    var fuzzify = function(salary, distance, size) {
        // Salary mapping
        fuzzySets['salary'] = [];
        for(var set in membershipFunctions['salary'])
            fuzzySets['salary'][set] = membershipFunctions['salary'][set](salary);

        // Distance mapping
        fuzzySets['distance'] = [];
        for(set in membershipFunctions['distance'])
            fuzzySets['distance'][set] = membershipFunctions['distance'][set](distance);

        // Size mapping
        fuzzySets['size'] = [];
        for(set in membershipFunctions['size'])
            fuzzySets['size'][set] = membershipFunctions['size'][set](size);

        return fuzzySets;
    };

    return {
        updateSettings: updateSettings,
        printFuzzySets: printFuzzySets,
        fuzzify: fuzzify
    };
})();