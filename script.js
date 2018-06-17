var componentsCounter = 0;

var Counter = React.createClass({

	propTypes: {
		id: React.PropTypes.number.isRequired,
	},

	getInitialState: function(){
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		})
	},

render: function() {
		return React.createElement('div', {className: 'divCounter'}, 
				React.createElement('button', {onClick: this.decrement}, '-'),
				React.createElement('div', {className: 'counter'}, this.state.counter),
				React.createElement('button', {onClick: this.increment}, '+'),
			)
	}
});

var element = React.createElement('div', {}, 
	React.createElement(Counter, {'id' : componentsCounter++ }),
	React.createElement(Counter, {'id' : componentsCounter++ }),
	React.createElement(Counter, {'id' : componentsCounter++ }),
);

ReactDOM.render(element, document.getElementById('app'));