import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(s => s + 1)}>+</button>
        <button onClick={() => setVisible(s => false)}>Wrap</button>

        <HookCounter value={value} />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setValue(s => s + 1)}>+</button>
        <button onClick={() => setVisible(s => true)}>Wrap</button>
      </div>
    );
  }
};

const HookCounter = ({ value }) => {
  useEffect(() => console.log("Mount"), []);

  useEffect(() => console.log("Update"), [value]);

  useEffect(() => () => console.log("Unmount"), []);

  return (
    <React.Fragment>
      <h2>{value}</h2>
      <Message />
    </React.Fragment>
  );
};

const Message = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
		const timeout = setTimeout( () => setVisible(false), 2500);
		return () => clearTimeout(timeout);
  }, []);

  if (visible)
    return (
      <div>
        <p>Hello useEffect</p>
      </div>
    );
	else 
	return (
		<div>

		</div>
	);
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
