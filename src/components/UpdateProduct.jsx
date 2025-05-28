import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Atom } from "react-loading-indicators";

const UpdateProduct = () => {
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((response) => {
      setUpdateProduct(response.data);
    });
  }, []);
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };
  let [updateProduct, setUpdateProduct] = useState(null);
  function handleChange(event) {
    let { name, value } = event.target;
    let fieldName = name.split("rating.")[1];
    console.log(fieldName);
    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: { ...updateProduct.rating, [fieldName]: value },
      });
    } else {
      console.log(name, value);
      setUpdateProduct({ ...updateProduct, [name]: value });
    }
  }
  let navigate = useNavigate();
  function handleSave(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("data updated successfully");
      navigate("/products");
    });
  }
  if (updateProduct !== null) {
    return (
      <div>
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign="center">
            Update Product
          </Typography>
          <Grid
            component="form"
            style={{ display: "grid", gap: "20px" }}
            onSubmit={handleSave}
          >
            <TextField
              name="title"
              value={updateProduct.title}
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="category"
              value={updateProduct.category}
              label="Category"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  name="rating.rate"
                  value={updateProduct.rating.rate}
                  label="Rate"
                  type="number"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  name="rating.count"
                  value={updateProduct.rating.count}
                  label="Count"
                  type="number"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Save
            </Button>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <Atom color="#2699e8" size="medium" text="Loading..." textColor="" />
    );
  }
};

export default UpdateProduct;
