import { createStore } from "redux";
import productReducer from "./reducerFunctions/productReducer";


const store = createStore(productReducer);

export default store;