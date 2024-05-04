import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddNewUser } from '../redux-thunk/User/action/userAction'

const Modal = () => {
    const [addUser, setAddUser] = useState({})
    const dispatch = useDispatch()

    const inputHandle = (e) => {
        setAddUser({...addUser, [e.target.name] : e.target.value})
    }

    const AddUser = () => {
        dispatch(AddNewUser(addUser));
    }

    return (
        <div>
            <div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ms-3 row">
                            <div className="col-6">
                            <lable>Card No.: </lable><br/><input type="text " name='cardNo' onChange={inputHandle} className='m-2 border-dark' />
                            <br/><lable>Name: </lable><br/><input type="text" name='name' onChange={inputHandle} className='m-2 border-dark' />
                            <br/><lable>Father Name: </lable><br/><input type="text" name='fatherName' onChange={inputHandle} className='m-2 border-dark' />                               
                            <br/><lable>DOB: </lable><br/><input type="text" name='dob' onChange={inputHandle} className='m-2  border-dark' />
                            </div>
                            
                            <div className="col-6">
                            <lable>Assembly Nondh Name: </lable><br/><input type="text" name='assemblyNoandName' onChange={inputHandle} className='m-2 border-dark' />
                            <br/><lable>Password: </lable><br/><input type="text" name='password' onChange={inputHandle} className='m-2 border-dark' />
                            <br/><lable>Address: </lable><br/><input type="text" name='address'  onChange={inputHandle} className='m-2  border-dark' />
                            <br/><lable>Part Nondh Name: </lable><br/><input type="text" name='partNoandName'  onChange={inputHandle} className='m-2  border-dark' />  

                                                       
                        </div>
                        
                       <div style={{width:"70%", display:'inline-block'}}>
                       <lable>Gender : </lable>
                         <input type="radio" id="female" name="sex" value="female" className=' border-0 border-dark ms-2' onChange={inputHandle} checked={addUser.sex === "female"} />
                         <label for="female" className=' border-0 border-dark ms-2'>Male</label>
                         <input type="radio" id="female" name="sex" value="female" className=' border-dark ms-3' onChange={inputHandle} checked={addUser.sex === "female"} /><label for="female" className='me-3 ms-2'>Female</label>
                            <input type="radio" id="other" name="sex" value="other" className=' border-0 border-dark ' onChange={inputHandle} checked={addUser.sex === "other"} /><label className='ms-2' for="other">Other</label>
                        </div>            
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={AddUser}>Add</button>
                            {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                if (news.id && news) {
                                    console.log(news.id);
                                    UpdateData()
                                }
                                else {
                                    addData()
                                }
                            }}>{news && news.id ? "Update" : "Add"}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
