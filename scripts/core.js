var jobCheck = {
	settings: {
		salary: 3000,
		distance: 3,
		size: 1000
	},
	fuzzifier: {},
	ruleBase: {},
	inferenceEngine: {},
	defuzzifier: {},
	setSettings: function(newSalary, newDistance, newSize) {
		this.settings.salary = newSalary;
		this.settings.distance = newDistance;
		this.settings.size = newSize;
		jobCheck.fuzzifier.updateSettings();
	},
	determineMatch: function(salary, distance, size) {
		var fuzzifier = this.fuzzifier,
			inferenceEngine = this.inferenceEngine,
			defuzzifier = this.defuzzifier;

		var fuzzifierResult = fuzzifier.fuzzify(salary, distance, size), 
			inferenceEngineResult = inferenceEngine.processInput(fuzzifierResult), 
			defuzzifierResult = defuzzifier.defuzzify(inferenceEngineResult);
			
		return defuzzifierResult;
	},
	run: function(jobsArray) {
		for(var i = 0; i < jobsArray.length; i++) {
			jobsArray[i].match = this.determineMatch(jobsArray[i].salary, jobsArray[i].distance, jobsArray[i].size)
		}

		// Bubble sort
		for(var i = 0; i < jobsArray.length - 1; i++) {
			for(var j = 0; j < jobsArray.length - 1 - i; j++) {
				if(jobsArray[j].match < jobsArray[j+1].match) {
					var temp = jobsArray[j];
					jobsArray[j] = jobsArray[j+1];
					jobsArray[j+1] = temp;
				}
			}
		}

		return jobsArray;
	}
}