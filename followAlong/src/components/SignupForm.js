import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

//Hooks Import
import useForm from '../Hooks/useForm'

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


// Here we are setting our Initial state!
const initialValue = {
  firstName: '',
  lastName: '',
  email: ''
}


export default function SignupForm() {
  //Styles are able to stay inside the App.js file
  const classes = useStyles();
  
  //Testing our localStorage hook
  //Setting the hook with the ket of name & value of omi
  // const [name , setName] = useLocalStorage('name', 'omi')
  
  //If your wonder our intial State thats being passed in as a props is basically equal to what ever is inside the ( () )
  //Fell free to add a name here and itll be chagned into the inital State!
  // These are the same ones we are returning from our useForm.js
  const [values, clearForm, handleChanges] = useForm(initialValue)
  
  //HandleSubmit functions can stay here since they dont do much to the state
  const handleSubmit = e => {
    //The reason to why its (values.firstName) is because thats where our {firstName} state lives at
    e.preventDefault();
    //we use ( ` ` ) to make sure the values of both first & last name show up!
    alert(`${values.firstName} ${values.lastName} ${values.email}`);
  };
  
  return (
    <div p={2} className="form">
      
      {/*This is our testing component to see if localstorage saves!*/}
      {/*<p>{name}</p>*/}
      {/*<button onClick={() => {*/}
      {/*  setName('Corona')*/}
      {/*}}>Click Me</button>*/}
      
      {/*<hr />*/}
      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
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