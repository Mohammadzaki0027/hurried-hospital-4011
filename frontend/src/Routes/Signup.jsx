import React, { useState } from "react";
import styled from "styled-components";
import FullWidthTextField from "../components/Input";
// import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate } from "react-router-dom";
// import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { Box, Button, Checkbox, Heading } from "@chakra-ui/react";

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

export const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    surname: "",
  });

  const [create,setCreate] = useState(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <MainDiv>
      <Box>
        <Heading mr="60px">Create an account</Heading>
        <Box>or</Box>
        <FullWidthTextField
          text={"Email address"}
          handle={inputHandler}
          name={"email"}
        />
        <FullWidthTextField
          text={"First name"}
          handle={inputHandler}
          name={"firstname"}
        />
        <FullWidthTextField
          text={"Surname"}
          name={"surname"}
          handle={inputHandler}
        />
        <FullWidthTextField
          text={"Password"}
          name={"password"}
          handle={inputHandler}
        />
      </Box>
      <Box className="checkbox">
        {/* <Checkbox {...label} defaultChecked /> */}
        {/* <label htmlFor="">This is a public or shared device</label> */}

       
        
        <Checkbox size={"md"} defaultChecked>Keep me signed in</Checkbox>

       
        
        <Box className="term checkboxCondition">
      Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.
      </Box>



      <Box>

      <Checkbox size={"md"} defaultChecked>I'd like to receive travel deals,
       special offers and other information from Expedia via email.</Checkbox>


      </Box>

      </Box>





      <Box className="term">
        By creating an account, I agree to the Expedia{" "}
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
          onClick={() => {
            axios
              .post(`http://188.166.98.109:5000/register`, user)
              .then((data) => alert("you account created")).then(data=>setCreate(true))
          }}
        >
          Continue
        </Button>
      </Box>
      <p>
        Already have an account?
        <span>
          <Link to={"/login"}> Sign in</Link>
        </span>
      </p>

      <p>Other ways to sign up</p>
    
      {/* <Link to="http://188.166.98.109:5000/auth/google"> <GoogleIcon sx={{ color: "blue" }}  */}
                  
                  {/* /></Link> */}

      {/* {create ? <Navigate to={'/login'}  />:""} */}

{/* <Box style={{display:"flex"}}> */}
      <Link><i class="fa-brands fa-apple"></i></Link>
      <Link><i class="fa-brands fa-facebook"></i></Link>
      {/* </Box> */}
    </MainDiv>
  );
};