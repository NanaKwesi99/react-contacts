import { createStore } from "redux";
import ContactReducer from "../Reducers/ContactReducer";

const Store = createStore(ContactReducer) 

export default Store;