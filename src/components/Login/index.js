"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { checkValidData } from "@/utils/validation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [formError, setFormError] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleToggleSignUp = () => setToggleSignUp((prev) => !prev);
  const handleSignIn = () => {
    // Validate form Data
    const error = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setFormError(error);
    console.log(error);
  };

  return (
    <div className="p-8 z-10">
      <div>
        <Image src={"/netflixLogo.png"} width={150} height={50} alt="logo" />
      </div>
      <div className="flex justify-center align-middle items-center p-8">
        <form
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "0.25rem",
            width: "450px",
          }}
          className="flex flex-col justify-center items-center gap-4 py-8 px-16"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="text-2xl font-bold" style={{ color: "white" }}>
            {toggleSignUp ? "Sign Up" : "Sign In"}
          </div>
          <p className="text-red-600">{formError}</p>
          {toggleSignUp && (
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              sx={{
                border: "0.0625rem solid rgba(128, 128, 128, 0.7)",
                borderRadius: "0.25rem",
                "& .MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "rgb(255, 255, 255)",
                },
                "& .MuiOutlinedInput-root": {
                  color: "rgb(255, 255, 255)",
                },
                "& .MuiInputLabel-root": {
                  color: "rgb(255, 255, 255)",
                },
                width: "100%",
              }}
            />
          )}
          <TextField
            id="outlined-basic"
            label="Email or mobile number "
            inputRef={emailRef}
            variant="outlined"
            sx={{
              border: "0.0625rem solid rgba(128, 128, 128, 0.7)",
              borderRadius: "0.25rem",
              "& .MuiInputBase-input-MuiOutlinedInput-input": {
                color: "rgb(255, 255, 255)",
              },
              "& .MuiOutlinedInput-root": {
                color: "rgb(255, 255, 255)",
              },
              "& .MuiInputLabel-root": {
                color: "rgb(255, 255, 255)",
              },
              width: "100%",
            }}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{ color: "white" }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              inputRef={passwordRef}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff
                        sx={{ color: "rgba(128, 128, 128, 0.7)" }}
                      />
                    ) : (
                      <Visibility sx={{ color: "rgba(128, 128, 128, 0.7)" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                color: "white",
                border: "0.0625rem solid rgba(128, 128, 128, 0.7)",
                borderRadius: "0.25rem",
                "& .MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "rgb(255, 255, 255)",
                },
                "& .MuiOutlinedInput-root": {
                  color: "rgb(255, 255, 255)",
                },
                "& .MuiInputLabel-root": {
                  color: "rgb(255, 255, 255)",
                },
              }}
              label="Password"
            />
          </FormControl>

          <Button
            fullWidth
            sx={{
              backgroundColor: "rgb(229, 9, 20)",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => handleSignIn()}
          >
            {toggleSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <div style={{ color: "white" }}>OR</div>
          <Button
            fullWidth
            sx={{
              backgroundColor: "rgb(229, 9, 20)",
              color: "white",
              textTransform: "none",
              background: "rgba(128, 128, 128, 0.4)",
            }}
          >
            Use a Sign-In Code
          </Button>
          <Button
            fullWidth
            variant="text"
            sx={{
              color: "white",
              textTransform: "none",
              textDecoration: "underline",
            }}
          >
            Forgot password?
          </Button>
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} />}
            sx={{
              color: "white",
              textTransform: "none",
            }}
            label="Remember Me"
          />
          {toggleSignUp ? (
            <div style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Already registered?{" "}
              <Button
                variant="text"
                style={{
                  "& :hover": {
                    textDecoration: "underline",
                  },
                  fontWeight: 600,
                  color: "white",
                  textTransform: "none",
                }}
                href={""}
                onClick={() => handleToggleSignUp()}
              >
                Sign In now.
              </Button>
            </div>
          ) : (
            <div style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              New to Netflix?{" "}
              <Button
                variant="text"
                style={{
                  "& :hover": {
                    textDecoration: "underline",
                  },
                  fontWeight: 600,
                  color: "white",
                  textTransform: "none",
                }}
                href={""}
                onClick={() => handleToggleSignUp()}
              >
                Sign up now.
              </Button>
            </div>
          )}
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "0.8125rem",
              fontWeight: 400,
            }}
          >
            <div>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </div>

            {learnMore ? (
              <div>
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </div>
            ) : (
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  px: 0,
                }}
                onClick={() => {
                  setLearnMore(true);
                }}
              >
                Learn more.
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
