import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from '../IMG/LOTUS.jpeg'
import { SubmitPartyData } from '../redux-thunk/User/action/Partyaction'
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { submitConnectionPartyData } from '../redux-thunk/User/action/PartyConnection';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

const ConnectionModal = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [personName, setPersonName] = React.useState([]);
    const [party, setPartyData] = useState({});
    const [election, setElectionData] = useState({});
    const [Localelection, setLocalElectionData] = useState([]);
    const [LocalPartyData, setLocalPartyData] = useState([]);
    const dispatch = useDispatch();


    const handleChangeParty = (e) => {
        // const { name, value } = e.target;
        setPartyData(e.target.value)
    }
    const handleChangeElection = (e) => {
        setElectionData(e.target.value)
    }

    useEffect(() => {
        axios.get('http://13.127.211.205:8000/v1/party/list')
            .then((res) => {
                setLocalPartyData(res.data.data)
                // console.log(res.data, "local data");
            })
    }, [])

    useEffect(() => {
        axios.get('http://13.127.211.205:8000/v1/election/list')
            .then((res) => {
                setLocalElectionData(res.data.data)
                // console.log(res.data, "local data");
            })
    }, [])
    

    const submitConnectionData = () => {
        let connectionData = {
            party,
            election
        }
        setOpen(false)

        dispatch(submitConnectionPartyData(connectionData))
    }

    return (
        <>
            <button type="button" className="btn btn-secondary m-3 align-center" onClick={handleOpen} >
                Add Connection
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="party-multiple-name-label">Party Name</InputLabel>
                            <Select
                                labelId="party-multiple-name-label"
                                id="party-multiple-name"
                                name="party"
                                value={party}
                                onChange={handleChangeParty}
                                input={<OutlinedInput label="Party Name" />}
                            // MenuProps={MenuProps}
                            >
                                {
                                    LocalPartyData.map((val, ind) => {
                                        return (
                                            <MenuItem style={{ textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} key={ind} value={val._id}>
                                                {val.party_name}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>

                            {/* election */}
                            <br />
                            <InputLabel style={{ position: "relative", marginBottom: "-21px" }} id="election-multiple-name-label">Election Name</InputLabel>
                            <Select
                                labelId="election-multiple-name-label"
                                id="election-multiple-name2"
                                name="election"
                                value={election}
                                onChange={handleChangeElection}
                                input={<OutlinedInput label="Election Name" />}
                            // MenuProps={MenuProps}
                            >
                                {
                                    Localelection?.map((val, ind) => {
                                        return (
                                            <MenuItem style={{ textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} key={ind} value={val._id}>
                                                {val.election_name}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ width: "94%", display: "flex", justifyContent: "end", marginTop: "10px" }}>

                        <button onClick={submitConnectionData} type="button" className="btn btn-secondary m-3 align-center" >
                            Submit
                        </button>
                        &nbsp;

                        <button onClick={handleClose} type="button" className="btn btn-secondary m-3 align-center"  >
                            Close
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ConnectionModal
