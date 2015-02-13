'use strict';

import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import SqlEditor from './components/SqlEditor';

function initalizeSqlEditor() {
	React.render(<SqlEditor id='editor'>{'\n'}--this is sql
		SELECT user_id, user_name FROM users WHERE id = 1
	</SqlEditor>, 
		document.getElementById('app'));
}

export function bootstrap() {
	initalizeSqlEditor();
}
