'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = String.raw;

	if (!native) {
		return implementation;
	}

	var templateObj = {
		raw: {
			0: 'x', 1: 'y', length: 2
		}
	};
	if (native(templateObj) !== 'xy') {
		// IE 11 TP has a broken String.raw implementation
		return implementation;
	}

	return native;
};
