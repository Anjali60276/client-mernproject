import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function ViewUser() {
  const { host } = useContext(UserContext);
  const [alluser, setAllusers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await axios.get(`${host}/api/user/Getuser`);
        setAllusers(response.data.getusers || []);   
        console.log("All user", response.data.getusers);
      } catch (error) {
        console.error(error);
      }
      console.log(host);
    };
    fetchusers();
  }, [host]);

  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          User Management
        </Typography>
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="user table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                  S.No
                </TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                  Address
                </TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alluser.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                alluser.map((userdata, index) => (
                  <TableRow key={userdata._id ?? index} hover>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{userdata.name ?? userdata.uname ?? "—"}</TableCell>
                    <TableCell align="center">{userdata.email ?? userdata.uemail ?? "—"}</TableCell>
                    <TableCell align="center">
                      {userdata.address ?? userdata.uaddress ?? userdata.userAddress ?? "—"}
                    </TableCell>
                    <TableCell align="center">
                      {userdata.phone ?? userdata.phoneno ?? userdata.uphone ?? userdata.contact ?? "—"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
