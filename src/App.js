import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from 'react-redux';
import store from "./redux/store";


function App() {
  return (
    <div>
      <Provider store={store}>
      </Provider>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
