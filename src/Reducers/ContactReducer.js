import { ADD_CONTACT } from '../Actions/ContactActions';

const initialState = {
    users: [
         {
           name: 'John',
           email: 'john@gmail.com',
           age: '20'
         }
      ],
    } 

    const ContactReducer = (state=initialState, action)=> { 
        switch (action.type) { 
            case ADD_CONTACT: 
                return  {...state.users,users:[...state.users,action.payload] };
            default: 
               return state;  
        }
     };
    
 export default ContactReducer;