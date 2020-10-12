'use strict';

module.exports = function (raw, t) {
	t.test('works with different callSite.raw types', function (st) {
		st.equal(raw({ raw: ['a', 'b', 'c'] }, 'd', 'e'), 'adbec', 'Array');
		st.equal(raw({ raw: { 0: 'a', 1: 'b', 2: 'c', length: 3 } }, 'd', 'e'), 'adbec', 'array-like object');
		st.equal(raw({ raw: 'abc' }, 'd', 'e'), 'adbec', 'string');
		st.equal(raw({ raw: {} }, 'd', 'e'), '', 'empty object');

		st.end();
	});

	t.test('different number of substitutions', function (st) {
		st.equal(raw({ raw: ['1', '3', '5'] }, '2'), '1235', 'less');
		st.equal(raw({ raw: ['1', '3'] }, '2', '4'), '123', 'more');

		st.end();
	});

	t.test('symbols', function (st) {
		st['throws'](function () { raw({ raw: [Symbol()] }); });
		st['throws'](function () { raw({ raw: ['1', '2'] }, Symbol()); });

		st.end();
	});
};
