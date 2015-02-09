'use strict';

import React from 'react';
import TestComponent from '../build/js/components/TestComponent';

describe('Test Component Test Suite', function() {
	it('should pass', function() {
		expect(TestComponent).to.not.be.undefined;
	});
});