jobCheck.defuzzifier = (function() {
	var outputValues = {
		"1": 0,
		"2": 15,
		"3": 30,
		"4": 45,
		"5": 60,
		"6": 75,
		"7": 90,
		"8": 100
	};
	
	/** Defuzzify using Singletons Center Of Gravity method
	*	@param (array) array of objects {value, output type}
	*	@return (int) result of defuzzification
	*/
    var defuzzify = function(array) {
    	var dividant, divisor;
    	dividant = divisor = 0;
        for(var i = 0; i < array.length; i++) {
        	var fuzzyValue = array[i].value,
        		outputType = array[i].output;
        	dividant += fuzzyValue * outputValues[outputType];
        	divisor += fuzzyValue;
        }
        return dividant / divisor;
    };

    return {
    	defuzzify: defuzzify
    };
})();