import { createStore, applyMiddleware, compose } from "redux";
import ContactReducer from "../Reducers/ContactReducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/config";



const Store = createStore(ContactReducer, compose (
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
   reactReduxFirebase(firebase),
   reduxFirestore(firebase)
   )); 
   
   


export default Store;