import React from "react";
import UsernameInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
function Ragistration() {
  return (
    // Inside your component
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <UsernameInput></UsernameInput>
      <PasswordInput></PasswordInput>
      <SubmitButton></SubmitButton>
    </div>
  );
}

export default Ragistration;
