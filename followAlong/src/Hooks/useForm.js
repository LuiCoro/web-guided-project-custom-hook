// The (initalState) beign passed in here is the one we add ourselves in the App.js File
//Check the state to understand this a bit more
// ( initialState ) ==> ( 'Edit Me!' )
// Before we madew this be my itself we simply added everything that had to do with modifying state when a user adds input!
import {useState} from "react";

const useForm = (initialValues) => {
  const [values, setValue] = useState(initialValues);
  
  //
  const handleChanges = e => {
    setValue({
      //The spread is there to keep any state we have added plus any news one added in the future!
      ...values,
      //this makes sure when we type in first onyl first name Changes!
      [e.target.name]: e.target.value,
    });
  };
  
  const clearForm = e => {
    e.preventDefault();
    //Here we are setting the value to equal our inital state
    setValue(clearedInput);
  }
  
  //Here we are setting state to equal something else when inputs are cleared
  const clearedInput = {
    firstName: 'Cleared!',
    lastName: 'Cleared!',
    email: 'Cleared!'
  }
  
  
  // ALWAYS make sure to RETURN our State, HandleChanges, and our ClearChanges or basically anything to do with modifying state
  return ([values, clearForm, handleChanges])
}


export default  useForm