(function(global) {

	window.generateLabels = function(buildData) {
		let dates = []
		 buildData.forEach(day => {
			 dates.push(day.date)
		 })
		return dates
	}
	
	window.filterCounts = function(buildData) {
		let counts = []
		 buildData.forEach(day => {
			 counts.push(day.count)
		 })
		 return counts
	}
	
}(this));
