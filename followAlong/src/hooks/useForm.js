
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