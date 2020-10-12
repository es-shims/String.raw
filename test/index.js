'use strict';

var raw = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(raw, t);

	t.end();
});
