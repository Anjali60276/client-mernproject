import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Toolbar, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function Product() {


   const {host} = useContext(UserContext);
    const [product , setProduct]=useState({
       pname:'',
       pdesc:'',
       pprice:'',
       pimage:'',   // store File object
       catid:'',
       pqty:'' 
    })
    const navigate=useNavigate();

    const [categories, setcategories]=useState([]);
    
    useEffect(()=>{
       axios.get(`${host}/api/category/Getcategory`)
      .then((res) => {
        console.log("Fetched categories:", res.data.getcategory);
        setcategories(res.data.getcategory || []); // <- safe fallback
      })
      .catch((error) => {
        console.log(error);
        setcategories([]); // ensure it's always an array
      });
  }, [host]);

     const handleViewProduct = () => {
    navigate('/Admin/ViewProduct'); //  This navigates properly
  };
 const handleChange=(e)=>{
      if(e.target.name==='pimage'){
        setProduct({ ...product, pimage: e.target.files[0] });
      } else {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log({[e.target.name]:e.target.value});
      }
    }

    const handleSubmit = () => {
      console.log(product);

      // Build FormData for multipart upload
      const formData = new FormData();
      formData.append('pname', product.pname);
      formData.append('pdesc', product.pdesc);
      formData.append('pprice', product.pprice);
      formData.append('pqty', product.pqty);
      formData.append('catid', product.catid);
      formData.append('pimage', product.pimage); // File object
     

      axios.post(`${host}/api/product/AddProduct`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(" Product added", res.data);
        alert("Product added successfully");
        // optional: reset form
        setProduct({
          pname:'',
          pdesc:'',
          pprice:'',
          pimage:null,
          catid:'',
          pqty:''
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Server error");
      });
      console.log(host);
    };

   
  return (
    <div>
         <Box sx={{ flexGrow: 1, p:1, ml: '150px',  mb:'90px'}}>
      {/* Add Toolbar to prevent content being hidden behind AppBar */}
      <Toolbar />
      <Box display="flex" justifyContent="flex-end" mb={2}>
      <Button 
        variant='contained' 
        onClick={handleViewProduct} 
        color="success" 
        sx={{ mb: 3 }} // margin below button
      >
        View Product
      </Button>
</Box>
     <Box style={{display:"flex" , justifyContent:"center", margin:"30px" }}>
        <Paper elevation={4} style={{width:"600px" ,padding:"20px"}}>
           
            <Typography variant='h4' textAlign="center" sx={{mb:4 , fontFamily:'fantasy', color:"darkslategray"}}>Add Product</Typography>
            <TextField variant='outlined' label='Product Name' type='text' name='pname' value={product.pname} fullWidth   sx={{mb:4}} onChange={handleChange}/>
            <TextField variant='outlined' label='Product Description' type='text' name='pdesc' value={product.pdesc} fullWidth  sx={{mb:3}} onChange={handleChange}/>
            <TextField variant='outlined' label='Product Price' type='number' name='pprice' value={product.pprice} fullWidth  sx={{mb:3}} onChange={handleChange}/>
            
            {/* File input: do NOT set value for file inputs */}

              <TextField

                id="pimage"
                name="pimage"
                type="file"
                InputLabelProps={{shrink:true}}
                onChange={handleChange}
                style={{ display: "block", width: "100%" }}
              />
          

            <TextField variant='outlined' label='Quantity' type='number' name='pqty' value={product.pqty} fullWidth  sx={{mb:3}} onChange={handleChange}/>
             <FormControl sx={{minWidth: 560 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
            <Select
                 labelId="demo-simple-select-autowidth-label"
                 id="demo-simple-select-autowidth"
                value={product.catid}
                name='catid'
                onChange={handleChange}
                autoWidth
                label="Category">
          {(categories || []).map((catdata)=>( // <- safe map
           
                <MenuItem key={catdata._id}  value={catdata._id}>{catdata.category_name}</MenuItem>
            
           ))}
        </Select>
      </FormControl>
        <Button variant='contained'  color='primary' style={{marginLeft:"200px", marginTop: 16}} onClick={handleSubmit}>Add Product</Button>
          
        </Paper>
      </Box>
      </Box>
    </div>
  )
}
