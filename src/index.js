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

        <PlanetInfo id={value} />
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


const usePlanetInfo = (id) => {

	const [planet, setPlanet] = useState('Planet Name');

	useEffect(() => {
		let cancelled = false;
		fetch(`https://swapi.co/api/planets/${id}`).then(res => res.json()).then(data => !cancelled && setPlanet(data.name));
		return () => cancelled = true;
	},[id])
	
	return planet;
}

const PlanetInfo = ({id}) => {



	return (
	<p>{id} - {usePlanetInfo(id)}</p>
	)
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
