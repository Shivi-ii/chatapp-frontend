import { isValidUsername } from "6pp";

export const EmailValidation = (email) => {
  if(!email){
    return "please fill the email"
  }
  const emailRegex = /^[^\s@]+@gmail\.com$/i;
  if (!emailRegex.test(email)) {
    return { isValid: false, errorMessage: "Email is Invalid" };
  }
};

export const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return { isValid: false, errorMessage: "Username is Invalid" };
};
