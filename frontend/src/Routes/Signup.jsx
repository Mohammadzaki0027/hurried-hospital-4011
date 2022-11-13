import React, { useState } from "react";
import styled from "styled-components";
import FullWidthTextField from "../components/Input";
// import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { Box, Button, Checkbox, Input, InputGroup, InputRightElement, Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";

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
  /* .checkbox {
    justify-content: space-between;
    text-align: start;
    margin: 0.375rem;
  } */
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

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // const [create,setCreate] = useState(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate()

  const handleSign = async () => {

    const payload = {
      email: user.email,
      password: user.password,
      name: `${user.firstname} ${user.surname}`
    }

    try {
      let sign = await axios.post("http://localhost:8080/user/signup", payload)
      alert("signup successfull")
      navigate("/login")
    }
    catch (err) {
      console.log(err)
      alert("Signup failed")
    }
  }

  const handleGoogle=()=>{
    window.open("http://localhost:8080/auth/google","_self")
  }

  return (
<>
    <Navbar/>
    <MainDiv>
      <Box>
        <Heading mr="60px">Create an account</Heading>
        <Box onClick={handleGoogle} style={{
            height: "60px", width: "400px",
            display: "flex",
            padding:"5px",
            justifyContent:"space-between",
            borderRadius: "5px",
            cursor: "pointer", background: "#3662d8"
          }}>
              <Box borderRadius={"5px"} display={"flex"} justifyContent="center" alignItems={"center"}  flex="1" backgroundColor="white" >
                      <img style={{height:"16px",width:"16px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
              </Box>
              <Box flex={"7"} display={"flex"} justifyContent="center" alignItems={"center"} >
                 <p style={{color:"white",fontSize:"18px"}}>Sign in with Google</p>
            </Box>
          </Box>
        <Box  w={"400px"}  display={"flex"} justifyContent="center" alignItems={"center"} >or</Box>
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
        {/* <FullWidthTextField
          text={"Password"}
          name={"password"}
          handle={inputHandler}
        /> */}
          <InputGroup size='md'>
            <Input
           size="md"
            p={"5px"}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              name="password"
              onChange={inputHandler}
            />
            <InputRightElement width='4.5rem' display="flex" justifyContent="flex-end" alignItems={"center"}>
              <i class="fa-solid fa-eye" size='sm' onClick={handleClick}>
                {/* {show ? 'Hide' : 'Show'} */}
              </i>
            </InputRightElement>
          </InputGroup>
      </Box>
      <Box className="checkbox">




        <Checkbox size={"md"} defaultChecked>Keep me signed in</Checkbox>



        <Box className="term checkboxCondition">
          Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.
        </Box>



        <Box>



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
          onClick={handleSign}
        >
          Continue
        </Button>
      </Box>
      <p style={{ marginTop: "25px" }}>
        Already have an account?
        <span>
          <Link to={"/login"}> Sign in</Link>
        </span>
      </p>

      <p style={{ marginTop: "25px" }}>Other ways to sign up</p>

      {/* <Link to="http://188.166.98.109:5000/auth/google"> <GoogleIcon sx={{ color: "blue" }}  */}

      {/* /></Link> */}

      {/* {create ? <Navigate to={'/login'}  />:""} */}

      <Box style={{ display: "flex", height: "35px", width: "60px", justifyContent: "space-around", mt: "-30px" }}>
        <Link><i style={{color:"black",fontSize:"20px"}} class="fa-brands fa-apple"></i></Link>
        <Link><i style={{fontSize:"20px"}} class="fa-brands fa-facebook"></i></Link>
      </Box>
    </MainDiv>
    </>
  );
};