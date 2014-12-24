// Create a client id cookie
function () {
	return {{cookie value}} || (function (name, value, expires, path, domain, secure) {
		var today = new Date();
		var expires_date = new Date( today.getFullYear(), today.getMonth(), parseInt(today.getDate()) + parseInt(expires) );
		document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires_date.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
		return value;
	}({{cookie name}}, {{random}}, 700, null, {{url hostname}}, null);
}