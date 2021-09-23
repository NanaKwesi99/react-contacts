import { getFirestore } from "redux-firestore";

export const ADD_CONTACT ="ADD_CONTACT";

export const addContact = (contact) => {
    contact.id= Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contact')
        .add(contact).then((docs)=>{
    console.log(docs);
        });
    }
    // return{
    //     type: ADD_CONTACT,
    //     payload: contact
    // }
}
export const editContact = (updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}

export const deleteContact = (contactId) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactId
    }
}