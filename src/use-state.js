import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
	return (
		<HookSwitcher />
	)
}

const HookSwitcher = () => {

	const [color, newColor] = useState('#333');
	const [divHeight, NewDivHeight] = useState(100);

	return (
		<div style= { { padding: '30px', background: color, height: `${divHeight}px`, transition: '.2s ease-in-out' } }>
			<button onClick={()=> newColor('#333') }>Switch Dark</button>
			<button onClick={()=> newColor('white') }>Switch White</button>
			<button onClick={()=> NewDivHeight( (s) => s+50 ) }>Expand</button>
		</div>
	)
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);