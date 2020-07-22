import { useState } from "react";

export const useLocalStorageArray = (key: string, initialData: []) => {
  const [items, setItems] = useState<[]>(() => {
    try {
      console.log("get data from local storage key: " + key);
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      const returnVaue = item ? JSON.parse(item) : initialData;

      return returnVaue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialData;
    }
  });

  const setData = (data: []) => {
    try {
      // Save state
      setItems(data);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(setItems));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [items, setData];
};

// custom Hook

export const useLocalStorage = (key: string, dataValue: string) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<string>(() => {
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
  const setValue = (value: string) => {
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
