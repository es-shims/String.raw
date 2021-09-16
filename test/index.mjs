import raw, * as rawModule from 'string.raw';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(raw, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(rawModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = rawModule;
	t.equal((await import('string.raw/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('string.raw/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('string.raw/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
