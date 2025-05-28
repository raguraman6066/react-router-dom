import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };
  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  function handleChange(event) {
    let { name, value } = event.target;
    let fieldName = name.split("rating.")[1];
    console.log(fieldName);
    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: { ...newProduct.rating, [fieldName]: value },
      });
    } else {
      console.log(name, value);
      setNewProduct({ ...newProduct, [name]: value });
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("data added successfully");
      setNewProduct({
        title: "",
        price: 500,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  }

  return (
    <div>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign="center">
          Create New Product
        </Typography>
        <Grid
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleAdd}
        >
          <TextField
            name="title"
            value={newProduct.title}
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            name="category"
            value={newProduct.category}
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="rating.rate"
                value={newProduct.rating.rate}
                label="Rate"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="rating.count"
                value={newProduct.rating.count}
                label="Count"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth>
            Add
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewProduct;
