export const ADD_CONTACT ="ADD_CONTACT";

export const addContact = (contact) => {
    contact.id= Math.random().toString();
    return{
        type: ADD_CONTACT,
        payload: contact
    }
}
export const editContact = (updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}

export const deleteContact = (contact_id) => {
    return {
        type: "DELETE_CONTACT",
        payload: contact_id
    }
}