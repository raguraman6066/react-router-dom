import { Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
let renderCount = 0;
//abc@gmail.com
let schema = Yup.object().shape({
  name: Yup.string()
    .required("name is required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "enter your fullname"),
  email: Yup.string()
    .email()
    .required("email is required")
    .matches(/^[a-z]+@[a-z]{3,5}.[a-z]{3,4}$/, "enter valid email"),
});
const SignUp = () => {
  let newObj = useParams();
  console.log(newObj);
  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  let [input, setInput] = useState("");
  renderCount++;
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  let handleData = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        SignUp - {newObj.username} -{renderCount}
      </div>
      <Paper
        elevation={20}
        style={paperStyle}
        component={"form"}
        onSubmit={handleSubmit(handleData)}
      >
        <Typography textAlign={"center"} variant="h5">
          Create Account
        </Typography>
        <TextField
          helperText={errors.name?.message}
          error={!!errors.name}
          label="name"
          {...register("name")}
        />
        <TextField
          helperText={errors.email?.message}
          error={!!errors.email}
          label="email"
          {...register("email")}
        />
        <TextField
          helperText={errors.age?.message}
          error={!!errors.age}
          label="age"
          {...register("age")}
        />
        <TextField
          helperText={errors.password?.message}
          error={!!errors.password}
          label="password"
          {...register("password")}
        />
        <TextField
          helperText={errors.cPassword?.message}
          error={!!errors.cPassword}
          label="cPassword"
          {...register("cPassword")}
        />{" "}
        <br />
        <Button type="submit">SignUp</Button>
      </Paper>
      <button onClick={handleNavigate}>Products</button>
    </>
  );
};

export default SignUp;
