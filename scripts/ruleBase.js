jobCheck.ruleBase = (function() {
	/*
	1 - 0%
	2 - 15%
	3 - 30%
	4 - 45%
	5 - 60%
	6 - 75%
	7 - 90%
	8 - 100%
	*/
	var rules = {
		"low": {
			"near": {
				"small": 3,
				"medium": 3,
				"big": 2
			},
			"far": {
				"small": 2,
				"medium": 2,
				"big": 1
			}
		},
		"moderate": {
			"near": {
				"small": 5,
				"medium": 5,
				"big": 4
			},
			"far": {
				"small": 4,
				"medium": 4,
				"big": 3
			}
		},
		"high": {
			"near": {
				"small": 8,
				"medium": 7,
				"big": 6
			},
			"far": {
				"small": 7,
				"medium": 6,
				"big": 5
			}
		}
	}

	var determineOutput = function(salary, distance, size) {
		return rules[salary][distance][size];
	};

	return {
		determineOutput: determineOutput
	};
})();

/*
	var rules = {
		"low": {
			"near": {
				"small": 3,
				"medium": 3,
				"big": 2
			},
			"far": {
				"small": 2,
				"medium": 2,
				"big": 1
			}
		},
		"moderate": {
			"near": {
				"small": 4,
				"medium": 4,
				"big": 3
			},
			"far": {
				"small": 3,
				"medium": 3,
				"big": 2
			}
		},
		"high": {
			"near": {
				"small": 5,
				"medium": 4,
				"big": 4
			},
			"far": {
				"small": 4,
				"medium": 3,
				"big": 3
			}
		}
	}
*/