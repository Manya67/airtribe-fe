import { Provider } from "react-redux";
import Heading from "./components/Heading";
import store from "./store/store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="h-[100vh] w-[100wh]">
        <Heading />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
