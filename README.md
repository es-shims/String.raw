# String.raw <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `String.raw` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.raw).

## Getting started

```sh
npm install --save string.raw
```

## Usage/Examples

```js
// Create Windows path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\new\aboutme.html`;

console.log(`${filePath}`); // "C:\Development\profile\new\aboutme.html"
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-shims/String.raw
[npm-version-svg]: https://versionbadg.es/es-shims/String.raw.svg
[deps-svg]: https://david-dm.org/es-shims/String.raw.svg
[deps-url]: https://david-dm.org/es-shims/String.raw
[dev-deps-svg]: https://david-dm.org/es-shims/String.raw/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.raw#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-shims/String.raw.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-shims/String.raw.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-shims/String.raw.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-shims/String.raw
