'use strict';

import React from 'react';
import CodeMirror from 'codemirror';
import CodeMirrorVim from 'codemirror/keymap/vim';
import CodeMirrorSql from 'codemirror/mode/sql/sql';


var SqlEditor = React.createClass({
	render: function() {
		return (
			<div className="sqlEditor">
				<textarea id={this.props.id}></textarea>
			</div>
			);
	},
	initializeCodeMirror: function() {
		console.log(this.props.children);
		var editor = CodeMirror.fromTextArea(document.getElementById(this.props.id), {
			lineNumbers: true,
			theme: 'solarized',
			keyMap: 'vim',
			mode: 'sql',
			showCursorWhenSelecting: true
		});
		editor.setValue(this.props.children);

	},
	componentDidMount: function() {
		this.initializeCodeMirror();	
	}
});

export default SqlEditor;