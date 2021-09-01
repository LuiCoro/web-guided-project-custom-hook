import { useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return(initialValue);
        }
    });

    //1. Setup State
    //2. When initializing state, check to see if a value exists in localStorage.
    //3. If a saved value does exist, put it into state.
    //4. If a saved value does not exist, put initialValue into localStorage.
    //5. if we change our state, put that changed value into localStorage.

    const setStoredValue = (value)=> {
        localStorage.setItem(key, value);
        setValue(value);
    }

    return([value, setValue]);
}

//1. make a useForm hook function.
//2. add into that function all stateful logic
//3. return all values needed in our SignupForm Component.
//4. implment our hook inside of the signupForm
const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form', initialValues);
  
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