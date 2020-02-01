import React, { useContext } from "react";
import ReactDOM from "react-dom";

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value={"Hi, my name is"}>
      <Text />
    </MyContext.Provider>
  );
};

const Text = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
