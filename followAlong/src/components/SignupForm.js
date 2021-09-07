import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

// The (initalState) beign passed in here is the one we add ourselves in the App.js File
//Check the state to understand this a bit more
// ( initialState ) ==> ( 'Edit Me!' )
// Before we madew this be my itself we simply added everything that had to do with modifying state when a user adds input!
const useForm = (initialValues) => {
  const [values, setValue] = useState(initialValues);
  
  const handleChanges = e => {
    setValue(e.target.value);
  };
  
  const clearForm = e => {
    e.preventDefault();
    //Here we are setting the value to equal our inital state
    setValue(initialValues);
  };
  
  // ALWAYS make sure to RETURN our State, HandleChanges, and our ClearChanges or basically anything to do with modifying state
  return ([values, clearForm, handleChanges])
}


// Here we are setting our Initial state!
const initialValue = {
  firstName: '',
  lastName: ''
}



export default function SignupForm() {
  //Styles are able to stay inside the App.js file
  const classes = useStyles();
  
  //If your wonder our intial State thats being passed in as a props is basically equal to what ever is inside the ( () )
  //Fell free to add a name here and itll be chagned into the inital State!
  // These are the same ones we are returning from our useForm.js
  const [value, clearForm, handleChanges] = useForm(initialValue)
  
  //HandleSubmit functions can stay here since they dont do much to the state
  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };
  
  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={value}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}