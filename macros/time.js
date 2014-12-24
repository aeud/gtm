// Render the GTM date time
function () {
	var d = new Date();
	function pad(num) {
		return ("0" + num).slice(-2);
	}
	return [d.getUTCFullYear(), pad(d.getUTCMonth() + 1), pad(d.getUTCDate())].join("-") + " " +  [pad(d.getUTCHours()), pad(d.getUTCMinutes()), pad(d.getUTCSeconds())].join(":");
}