

export const ADD_CONTACT ="ADD_CONTACT";
export const SET_ALL_CONTACTS = "SET_ALL_CONTACTS"

export const addContact = (contact) => {
    contact.id= Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
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

export const getAllcontacts =()=>{
    return(dispatch, state, {getFirestore})=>{
    getFirestore()
    .collection('contacts')
    .onSnapshot(
        (snapshot)=>{
    let contacts =[];
    snapshot.forEach((doc)=>{
        contacts.push(doc.data())
    });
    dispatch({
        type: SET_ALL_CONTACTS,
        payload: contacts
            })
        })  
    }
    }