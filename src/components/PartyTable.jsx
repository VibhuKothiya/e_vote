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
import PartyModal from './PartyModal';
import { DeleteParty, getPartyData } from '../redux-thunk/User/action/Partyaction';


const PartyTable = () => {
  const { partyData} = useSelector((state)=>state.PartyList);
  // console.log(partyData, "partyyydataaa");
 
  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(partyData);
    dispatch(getPartyData())
  },[])

  const deleteParty = (_id) => {
    dispatch(DeleteParty(_id));
    // dispatch(getPartyData())
  }

  return (
    <>
      <button type="button" className="btn btn-secondary m-3 align-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Party
      </button>
    <PartyModal/>

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '700' }}>Party Name</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Short Code</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Party Logo</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {partyData?.map((val, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    
                    <TableCell >{val.party_name}</TableCell>
                    <TableCell >{val.short_code}</TableCell>
                    <TableCell ><img src={`${val.party_logo}`} style={{width:'50px', height: '50px'}}/></TableCell>
                    
                    <TableCell ><i class="fa-solid fa-pen-to-square me-4" style={{ fontSize: '16px' }}></i>
                      <i onClick={() => deleteParty(val._id)} class="fa-solid fa-trash" style={{ fontSize: '16px', cursor:'pointer' }}></i>
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

export default PartyTable
