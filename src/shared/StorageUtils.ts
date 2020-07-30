import { useState } from "react";

// custom Hook
export const useLocalStorage = <s>(key: string, dataValue: s): [s, (data: s) => void] => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<s>(() => {
    try {
      console.log("local storage key: " + key);
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      const returnVaue = item ? JSON.parse(item) : dataValue;

      return returnVaue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return dataValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: s) => {
    try {
      console.log("on setValue() with value " + value);
      console.log("A old value is: " + storedValue);
      console.log("A new value is: " + value);
      // Allow value to be a function so we have same API as useState
      const valueToStore = value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
