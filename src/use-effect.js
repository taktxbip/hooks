import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

	if (visible) {
		return (
			<div>
				<button onClick={ () => setValue((s) => s + 1 ) }>+</button>
				<button onClick={ () => setVisible((s) => false )}>Wrap</button>
	
				<ClassCounter value={value} />
				<HookCounter value={value} />
			</div>
		);
	}
	else {
		return (
			<div>
				<button onClick={ () => setValue((s) => s + 1 ) }>+</button>
				<button onClick={ () => setVisible((s) => true )}>Wrap</button>
			</div>
		);
	}

};

class ClassCounter extends Component {

	
	componentDidMount() {
		console.log('Component Mount');
	}

	componentDidUpdate() {
		console.log('Component Update');
	}

	componentWillUnmount() {
		console.log('Component Will Unmount');
	}

	render() {
		const { value } = this.props;
		return <h2>{value}</h2>;
	}

};

const HookCounter = ({value}) => {
	
	useEffect(() => {
		console.log('useEffect()');
		return () => console.log('clear');
	}, [ value ])

  return <h2>{value}</h2>;
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
