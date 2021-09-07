//We will be getting a key thats able to save the data we are setting in localStorage
import {useState} from "react";

const useLocalStorage = (key, initialValue) => {
  // When we create state, check to see if that value is in { localStorage } !
  // If the key exists, put that into our state value
  // If it does not, put our initialValue into state AND localStorage
  // When we update our state, save that update to localStorage
  
  //Both mean the same thing!
  // const [value , setValue] = useState(initialValue)
  
  //const [value, setValue] = useState(() => { return initialValue }
  
  const [value, setValue] = useState(() => {
    //This if statement checks to see if the key exist and returns it as a string
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key))
    }
    
    //Rember the value always has to be a JSON string!
    window.localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue;
  })
  
  // Setting this in localStorage
  const setLocalStorageValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }
  
  return [value, setLocalStorageValue]
}

export default useLocalStorage