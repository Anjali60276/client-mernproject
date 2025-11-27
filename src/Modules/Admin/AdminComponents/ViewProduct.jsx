import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function ViewProduct() {
  const {host} = useContext(UserContext);
  const [allproduct, setAllproduct] = useState([]);

  useEffect(()=>{
    fetchproduct();
  } ,[])

  const fetchproduct = async () => {
    try {
      const response = await axios.get(`${host}/api/product/Getproduct`)
      setAllproduct(response.data.getproduct || []);
      console.log("All product", response.data.getproduct)
    } catch (error) {
      console.log(error)
    }
  }

  // added handler to delete product by id and refresh list
  const handleDelete = (id) => {
    console.log("product id " + id);
    axios.delete(`${host}/api/product/Deleteproduct/${id}`)
      .then(() => {
        alert("product deleted");
        fetchproduct();
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(host);
  }

  return (
    <div>
      <TableContainer sx={{ ml: '125px', mt: 2 }}>
        <Typography variant='h4' sx={{ mb: 3, textAlign: 'center' }}> View Product</Typography>
        <Table sx={{ width: "80%", mx: "auto" }}>
          <TableHead>
            <TableRow  style={{backgroundColor: '#fbc02d',}}  >
              <TableCell align="right" style={{fontSize:"18px" , fontWeight:"bold"}}>Sl .No</TableCell>
              <TableCell align="right" style={{fontSize:"18px" , fontWeight:"bold"}}>Product Name</TableCell>
                <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Product Image</TableCell>
              <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Description</TableCell>
              <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Category</TableCell>
              <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Product quantity</TableCell>
              <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Product price</TableCell>
              <TableCell align="right" style={{fontSize:"18px" ,fontWeight:"bold"}}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            {allproduct.map((productdata,index)=>(
              <TableRow key={productdata._id ?? index} style={{backgroundColor: '#fffde7'}}>
                <TableCell align="right" > {index+1} </TableCell>
                <TableCell align="right">{productdata.pname }</TableCell>
                <TableCell align="right">{productdata.pdesc}</TableCell>
                <TableCell align="right">{productdata.catid ?? productdata.category_name}</TableCell>
                <TableCell align="right">{productdata.pqty}</TableCell>
                <TableCell align="right">{productdata.pprice }</TableCell>
                <TableCell align="right">
                  <img src={`http://localhost:7000/api/image/${productdata.pimage}`}  alt="myimage" style={{width:"100px"}}/>
                  <Button variant='contained' color='success' component={Link} to={`/Admin/Updateproduct/${productdata._id}`} ><EditIcon/>Update</Button>
                  <Button variant='contained' color='error' onClick={()=>handleDelete(productdata._id)}><DeleteIcon/>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
