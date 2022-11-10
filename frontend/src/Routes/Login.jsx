import React, { useContext, useState } from "react";
import styled from "styled-components";
import FullWidthTextField from "../components/Input";
// import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate } from "react-router-dom";
// import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { Box, Button, Checkbox, Heading, Input } from "@chakra-ui/react";
// import { StaysInputContext } from "../../Contexts/StaysInputContext";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  font-family: "Centra No2", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  align-items: center;
  div {
    width: 400px;
    margin-top: 8px;
  }
  div > h1 {
    color: #343b53;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.25rem;
  }
  input {
    appearance: none;
    background-color: #fff;
    border: 1px solid #727483;
    border-top-color: rgb(114, 116, 131);
    border-right-color: rgb(114, 116, 131);
    border-bottom-color: rgb(114, 116, 131);
    border-left-color: rgb(114, 116, 131);
    border-radius: 0.5rem;
    color: #141d38;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    width: 100%;
    padding-bottom: 10px;
  }
  .checkbox {
    justify-content: space-between;
    text-align: start;
    margin: 0.375rem;
  }
  .term {
    font-size: 14px;
  }
  button {
    width: inherit;
    height: 50px;
    background-color: #3662d8;
    color: #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;
    min-height: 3rem;
    padding: 0.25rem 1rem;
    border-style: solid;
    border-width: 0;
  }
  a {
    justify-content: center;
    margin-top: 20px;
    font-size: 0.875rem;
    color: #3662d8;
  }
  p {
    font-family: "Centra No1", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
  }
  button {
    margin-top: 10px;
    cursor: pointer;
  }
`;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
 const Login = () => {
  // const [user, setUser] = useState({ email: "", password: "" });

  // const {auth,handleAuth} = useContext(StaysInputContext) 

  // console.log(auth,handleAuth)
  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };
  // console.log(user);
  return (
    <MainDiv>
      <Box>
        <Heading>Sign in</Heading>
        <FullWidthTextField
          text={"Email address"}
          // handle={inputHandler}
          name={"email"}
        />
        <FullWidthTextField
          text={"Password"}
          // handle={inputHandler}
          name={"password"}
        />
      </Box>

      <div className="checkbox">
        
        <Checkbox size={"md"} defaultChecked>Keep me signed in</Checkbox>

       
        {/* <Checkbox {...label} defaultChecked /> */}
        {/* <label htmlFor="">This is a public or shared device</label> */}
      </div>
      <Box className="term checkboxCondition">
      Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.
      </Box>
      <Box className="term">
        By signing in, I agree to the Expedia{" "}
        <Link to="/terms" >
          Terms and Conditions
        </Link>
        ,{" "}
        <Link to="/privacy" >
          Privacy Statement
        </Link>{" "}
        and{" "}
        <Link to="/rewards/terms" >
          Expedia Rewards Terms and Conditions
        </Link>
        .
      </Box>
      <Box>
        <Button
          // onClick={() => {
          //   axios
          //     .post(`http://188.166.98.109:5000/login`, user)
          //     .then((data) => alert("you logged in")).then(data=>handleAuth(true))
          // }}
        >
          Sign in
        </Button>
      </Box>
  
      <Link to={"/"}>Forgot password?</Link>

      <p>
        Don't have an account?{" "}
        <span>
          <Link to={"/Signup"}>Create one</Link>
        </span>
      </p>

      <p>or continue with</p>
     
        {/* <Link to="http://188.166.98.109:5000/auth/google">
           <GoogleIcon sx={{ color: "blue" }} 
                  
                  /></Link>
      {auth ? <Navigate to={'/'} />:""} */}
    </MainDiv>
  );
};


export default Login;