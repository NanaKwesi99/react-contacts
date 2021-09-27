import { ADD_CONTACT, SET_ALL_CONTACTS } from "../Actions/ContactActions";
const initialState = {
    contacts: [
        //  {
        //    Name: 'John',
        //    Phone: '02454576',
        //    Location: 'Kumasi',
        //    id : '3456iutre6u'
        //  }
      ],
    } 

    const contactReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_CONTACT:
                return { ...state.contacts, contacts: [...state.contacts, action.payload] };
    
            case "EDIT_CONTACT":
          return{
            ...state, contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
          )
          }
    
          case "DELETE_CONTACT":
            const contactSaved = state.contacts.filter((contact) => {
              return contact.id !== action.payload;
            });
            return{...state, contacts: contactSaved}

            case SET_ALL_CONTACTS:
            return{...state, contacts: action.payload}

          default:
            return state;
        }
    };
    
    export default contactReducer;