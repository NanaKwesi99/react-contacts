

export const ADD_CONTACT ="ADD_CONTACT";
export const SET_ALL_CONTACTS = "SET_ALL_CONTACTS"

export const addContact = (contact) => {
    contact.id= Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
        .add({...contact, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((docs)=>{
    console.log(docs);
        });
    }
    // return{
    //     type: ADD_CONTACT,
    //     payload: contact
    // }
}
export const editContact = (updatedContact) => {
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
        .doc(updatedContact)
        .set(updatedContact).
        then(()=>{})
    }
    // return {
    //     type: "EDIT_CONTACT",
    //     payload: updatedContact
    // }
}

export const deleteContact = (contactId) => {
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('contacts').doc(contactId).delete().then(()=>{

        })
    }
    // return {
    //     type: "DELETE_CONTACT",
    //     payload: contactId
    // }
}

export const getAllcontacts =()=>{
    return(dispatch, state, {getFirestore})=>{
    getFirestore()
    .collection('contacts').orderBy('name','desc')
    .onSnapshot((snapshot)=>{
    let contacts =[];
    snapshot.forEach((doc)=>{
        contacts.push({...doc.data(), id:doc.id})
        console.log(contacts, (doc))
    });
    dispatch({
        type: SET_ALL_CONTACTS,
        payload: contacts
            })
        })  
    }
    }