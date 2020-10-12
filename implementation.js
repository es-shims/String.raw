'use strict';

var ToObject = require('es-abstract/2020/ToObject');
var ToString = require('es-abstract/2020/ToString');
var LengthOfArrayLike = require('es-abstract/2020/LengthOfArrayLike');
var callBound = require('es-abstract/helpers/callBound');

var $push = callBound('Array.prototype.push');
var $join = callBound('Array.prototype.join');

module.exports = function raw(template /* , ...substitutions */) {
	var numberOfSubstitutions = arguments.length - 1;

	var cooked = ToObject(template);
	var rawObj = ToObject(cooked.raw);

	var literalSegments = LengthOfArrayLike(rawObj);
	if (literalSegments <= 0) {
		return '';
	}

	var stringElements = [];

	for (var nextIndex = 0; ; nextIndex++) {
		$push(stringElements, ToString(rawObj[nextIndex]));

		if (nextIndex + 1 === literalSegments) {
			return $join(stringElements, '');
		}
		if (nextIndex < numberOfSubstitutions) {
			$push(stringElements, ToString(arguments[nextIndex + 1]));
		}
	}
};
