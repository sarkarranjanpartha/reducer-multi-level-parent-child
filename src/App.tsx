import React from "react";
import { Provider } from "react-redux";
import { store } from "./types/store";
import GrandParent from "./components/GrandParent";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GrandParent />
      </div>
    </Provider>
  );
};

export default App;
