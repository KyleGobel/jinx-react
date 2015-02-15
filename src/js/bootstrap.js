'use strict';

import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import SqlEditor from './components/SqlEditor';

function initalizeSqlEditor() {
	React.render(<SqlEditor sourceDomId='someSql' id='editor'/>,
		document.getElementById('app'));
}

export function bootstrap() {
	initalizeSqlEditor();
}
