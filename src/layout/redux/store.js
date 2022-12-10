import { createStore } from "redux";
import productReducer from "./reducer_Function/productReducer";


const store = createStore(productReducer);

export default store;