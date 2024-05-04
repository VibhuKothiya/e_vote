import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ElectionModal from './ElectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteElection, getElection } from '../redux-thunk/User/action/ElectionAction';

const ElectionTable = () => {

  const { ElectionData} = useSelector((state)=>state.ElectionList);
  const dispatch = useDispatch();
    const deleteElection = (_id) => {
        dispatch(DeleteElection(_id))
    }

    useEffect(()=>{
      // console.log(ElectionData);
      dispatch(getElection())
    },[])

  return (
    <>
      <button type="button" className="btn btn-secondary m-3 align-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Election
      </button>
        <ElectionModal />

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '700' }}>Election Name</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Date</TableCell>
                <TableCell style={{ fontWeight: '700' }} >Action</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {ElectionData?.map((val, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    
                    <TableCell >{val.election_name}</TableCell>
                    <TableCell >{val.date}</TableCell>                   
                    
                    <TableCell ><i class="fa-solid fa-pen-to-square me-4" style={{ fontSize: '16px' }}></i>
                      <i onClick={() => deleteElection(val._id)} class="fa-solid fa-trash" style={{ fontSize: '16px', cursor:'pointer' }}></i>
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

export default ElectionTable
