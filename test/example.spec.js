'use strict';

import React from 'react';
import Ace from 'ace';
import TestComponent from '../build/js/components/TestComponent';

describe('Test Component Test Suite', function() {
	it('should pass', function() {
		expect(TestComponent).to.not.be.undefined;
	});
});

describe('Ace tests', function() {
	it('should exist', function() {
		console.log(ace);
		expect(Ace).to.not.be.undefined;
	});
});