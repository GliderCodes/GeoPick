import React from "react";
import { RouteChildrenProps } from "react-router-dom";
import { auth } from "../../firebase";
import { LANDING } from "../../constants/routes";
import { createStore, StateMachineProvider } from "little-state-machine";
import SignupForm from "./SignupForm";
import { useForm } from "react-hook-form";

function Signup(props: RouteChildrenProps) {
  if (auth.checkUserLoggedIn()) props.history.push(LANDING);
  return (
    <StateMachineProvider>
      <SignupForm />
    </StateMachineProvider>
  );
}

export default Signup;
