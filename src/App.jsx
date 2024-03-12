import { Provider } from "react-redux";
import Heading from "./components/Heading";
import store from "./store/store";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <div className="h-[100vh] w-[100wh] text-gray overflow-hidden">
        <Heading />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
