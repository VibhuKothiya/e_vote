import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddElection } from '../redux-thunk/User/action/ElectionAction';

const ElectionModal = () => {
    const dispatch = useDispatch()
    const [electionData, setElectionData] = useState();

    const handleInputChange = (e) => {        
        setElectionData({...electionData, [e.target.name] : e.target.value})
    }

    const ElectionSubmit = () => {
        dispatch(AddElection(electionData))        
    }

  return (
    <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Election</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ms-3">
                            <lable>Election Name: </lable><br /><input type="text" name='election_name' onChange={handleInputChange} className='m-2 border-dark' />
                            <br /><lable>Date: </lable><br /><input type="date" name='date' onChange={handleInputChange} className='m-2 border-dark' />
                            
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ElectionSubmit}>Submit</button>
                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ElectionModal
