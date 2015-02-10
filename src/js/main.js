'use strict';

import React from 'react';
import Ace from 'ace';
import TestComponent from './components/TestComponent';

React.render(<TestComponent />, document.getElementById('app'));

var editor = Ace.edit('editor');
editor.getSession().setMode(new JavaScriptMode());