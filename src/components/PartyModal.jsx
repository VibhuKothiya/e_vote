import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'

// import logo from '../IMG/LOTUS.jpeg'
import { SubmitPartyData } from '../redux-thunk/User/action/Partyaction'

const PartyModal = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        party_name: '',
        party_logo: '',
        short_code: ''
    })

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleLogoChange = (e) => {
        setFormData({
            ...formData,
            party_logo: e.target.files[0]
          });
    }
  

    const PartySubmit = (e) => {
        // console.log(formData, "party submitt");
        e.preventDefault();
    const data = new FormData();
    data.append('party_name', formData.party_name);
    data.append('short_code', formData.short_code);
    data.append('party_logo', formData.party_logo);

        // let option = {
        //     header: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   };

        dispatch(SubmitPartyData( data ))
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Party Detail</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ms-3">
                            <lable>Party Name: </lable><br /><input type="text" name='party_name' onChange={handleInputChange} className='m-2 border-dark' />
                            <br /><lable>Short Code: </lable><br /><input type="text" name='short_code' onChange={handleInputChange} className='m-2 border-dark' />
                            <br /><lable>Party Logo: </lable><br /><input type="file" onChange={handleLogoChange} className='m-2 border-dark' />

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={PartySubmit}>Submit</button>
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

export default PartyModal
