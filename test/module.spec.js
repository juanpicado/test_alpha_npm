const Module1 = require('../src/index');
const assert = require('assert');

describe('basic test', function () {
	it('create instance', function () {
			const mod1 = new Module1();
			assert(mod1.foo(), 'bar');
	});
});