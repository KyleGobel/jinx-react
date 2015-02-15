/******
* SqlEditor Component
* 
* Usage
* <SqlEditor id='editor' sourceDomId='sql' />
* 
* Attributes
* id 
* ****
* this will be used internally as the id of the textarea that the code mirror
* sql window is created out of
* 
* sourceDomId 
* ****
*  this is the dom element that the editor will read the sql out of it and populate
* into the editor, it will also be hidden automatically
******/


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
		var el = document.getElementById(this.props.sourceDomId);
		var editor = CodeMirror.fromTextArea(document.getElementById(this.props.id), {
			lineNumbers: true,
			theme: 'solarized',
			keyMap: 'vim',
			mode: 'sql',
			showCursorWhenSelecting: true
		});
		if (typeof el !== "undefined")
		{
			el.style.display = 'none';
			editor.setValue(el.innerHTML.trim());
		}
	},
	componentDidMount: function() {
		this.initializeCodeMirror();	
	}
});

export default SqlEditor;