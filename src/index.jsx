import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/counter/counter";
import reducers from "./reducers";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>
  </StrictMode>
);