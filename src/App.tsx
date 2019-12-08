import React from "react";

import { NumbersStore, NumbersStoreProvider } from "./models";

import AddNumber from "./components/AddNumber";
import NumbersInfo from "./components/NumbersInfo";
import NumbersList from "./components/NumbersList";

const numbersStore = NumbersStore.create({});

const App: React.FC = () => {
  return (
    <NumbersStoreProvider value={numbersStore}>
      <div>
        <AddNumber />
        <NumbersInfo />
        <NumbersList />
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
      </div>
    </NumbersStoreProvider>
  );
};

export default App;
