import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, loginAdmin } from '../redux-thunk/User/action/userAction';
import Modal from './Modal';



const UserTable = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.UserList)

  

  useEffect(() => {
    dispatch(loginAdmin())
  }, [])

  const deleteData = (_id) => {
   
    dispatch(DeleteUser(_id));
    dispatch(loginAdmin())
  }

  return (
    <>
      <button type="button" className="btn btn-secondary m-3 align-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
      </button>
    <Modal/>

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '700' }}>Card No.</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Name</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Father Name</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Gender</TableCell>
                <TableCell style={{ fontWeight: '700' }} >DOB</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Address</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.map((val, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                    <TableCell component="th" scope="row">
                      {val.cardNo}
                    </TableCell>
                    <TableCell >{val.name}</TableCell>
                    <TableCell >{val.fatherName}</TableCell>
                    <TableCell >{val.sex}</TableCell>
                    <TableCell >{val.dob}</TableCell>
                    <TableCell >{val.address}</TableCell>
                    <TableCell ><i class="fa-solid fa-pen-to-square me-4" style={{ fontSize: '16px' }}></i>
                      <i onClick={() => deleteData(val._id)} class="fa-solid fa-trash" style={{ fontSize: '16px', cursor:'pointer' }}></i>
                    </TableCell>
                  </TableRow>
                )
              }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default UserTable;
