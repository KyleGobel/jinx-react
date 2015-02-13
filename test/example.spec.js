'use strict';

import React from 'react';
import CodeMirror from 'codemirror';
import TestComponent from '../build/js/components/TestComponent';

describe('Test Component Test Suite', function() {
	it('should pass', function() {
		expect(TestComponent).to.not.be.undefined;
	});
});

describe('Ace tests', function() {
	it('should exist', function() {
		console.log(CodeMirror);
		expect(CodeMirror).to.not.be.undefined;

	});
});