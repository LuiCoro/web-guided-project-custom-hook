import { useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    //1. Setup State
    //2. When initializing state, check to see if a value exists in localStorage.
    //3. If a saved value does exist, put it into state.
    //4. If a saved value does not exist, put initialValue into localStorage.
    
    return([value, setValue]);
}

//1. make a useForm hook function.
//2. add into that function all stateful logic
//3. return all values needed in our SignupForm Component.
//4. implment our hook inside of the signupForm
const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
  
    const handleChanges = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return([values, handleChanges, clearForm]);
}

export default useForm;