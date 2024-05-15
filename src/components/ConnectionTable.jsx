import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getConnectionData } from '../../../redux-thunk/action/partyListAction'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import ConnectionModal from './ConnectionModal';
import { getPartyConnectionData } from '../redux-thunk/User/action/PartyConnection';

function ConnectionTable() {
    const dispatch = useDispatch()
    const { partyConnectionData } = useSelector((state) => state.ConnctionList)

    useEffect(() => {
        dispatch(getPartyConnectionData())
    }, [])

    return (
        <>            
            <ConnectionModal />
            <div className="table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: '700' }}>Sr. Number</TableCell>
                                <TableCell style={{ fontWeight: '700' }} >Party Name</TableCell>
                                <TableCell style={{ fontWeight: '700' }} >Election Name</TableCell>
                                <TableCell style={{ fontWeight: '700' }} >Symbole</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {partyConnectionData?.filter((val) => val.party && val.election).map((val, ind) => {
                                return (
                                    <TableRow
                                        key={ind}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>{ind + 1}</TableCell>    
                                        <TableCell >{val.party?.party_name}</TableCell>
                                        <TableCell >{val.election?.election_name}</TableCell>
                                        <TableCell ><img src={`${val.party?.party_logo}`} style={{ width: '50px', height: '50px' }} /></TableCell>

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

export default ConnectionTable