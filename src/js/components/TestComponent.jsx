import React from 'react';
import Ace from 'ace';

var TestComponent = React.createClass({
	render: function() {
		return <div>
		<div id="editor">some text</div>
		<div className="ui basic button"><i className="icon user"></i>Test React Component!</div></div>;
	}
});

export default TestComponent;