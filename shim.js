'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringRaw() {
	var polyfill = getPolyfill();
	define(
		String,
		{ item: polyfill },
		{ item: function () { return String.raw !== polyfill; } }
	);
	return polyfill;
};
