import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLoginDataSubmit } from '../User/action/userAction';
import { Navigate, useNavigate } from 'react-router-dom';

const UserLoginForm = () => {
    const [UserloginData, setLoginData] = useState({});
   const { isUserLogin } = useSelector((state) => state.UserList)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const inputHandle = (e) => {
        setLoginData({...UserloginData, [e.target.name] : e.target.value})
        
    }
        console.log(UserloginData, "User Login Data");
    //  const submitLoginData = () => {
    //     dispatch(userLoginDataSubmit(UserloginData))
    // }

    const submitForm = (e) =>{
        e.preventDefault()
        dispatch(userLoginDataSubmit(UserloginData))
    }

    const adminLoginPage = () => {
        Navigate('/Home')
    }

    useEffect(() => {
        if (isUserLogin) {
            navigate ("/Voter")
        }
    }, [isUserLogin])

  return (
    <div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1a257e", height: '100vh' }}>
                    <svg width="200" height="100" viewBox="0 0 272 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_205_19)">
                            <path d="M85.6602 49.164H97.0699L66.8044 73.994H183.378L205.207 58.1069L189.834 57.6109L194.293 49.164H231.99L185.87 81.9449H40.0215L85.6602 49.164Z" fill="#CBCBCB" />
                            <path d="M133.806 0L91.1104 73.994H169.492L194.788 32.7809L133.806 0Z" fill="white" />
                            <path d="M91.1104 89.3997L142.957 121.67L163.051 89.3997H91.1104Z" fill="white" />
                            <path opacity="0.47" d="M40.0215 81.9449V86.905H188.347L231.99 56.1228V49.164L185.87 81.9449H40.0215Z" fill="#8E8E8E" />
                        </g>
                        <path d="M9.82723 153.575V161.803H20.877V167.022H9.82723V175.721H22.2876V181.081H3.2444V148.214H22.2876V153.575H9.82723ZM48.3004 161.521V167.069H28.3639V161.521H48.3004ZM62.2658 153.575V161.803H73.3156V167.022H62.2658V175.721H74.7262V181.081H55.683V148.214H74.7262V153.575H62.2658ZM87.2913 175.862H98.1059V181.081H80.7084V148.261H87.2913V175.862ZM108.873 153.575V161.803H119.923V167.022H108.873V175.721H121.333V181.081H102.29V148.214H121.333V153.575H108.873ZM125.717 164.624C125.717 161.396 126.438 158.512 127.88 155.973C129.353 153.402 131.343 151.412 133.851 150.001C136.39 148.559 139.227 147.838 142.362 147.838C146.029 147.838 149.243 148.779 152.001 150.659C154.76 152.54 156.687 155.142 157.785 158.465H150.214C149.462 156.897 148.396 155.722 147.017 154.938C145.669 154.154 144.102 153.763 142.315 153.763C140.403 153.763 138.694 154.217 137.19 155.126C135.716 156.004 134.557 157.258 133.71 158.888C132.895 160.518 132.488 162.43 132.488 164.624C132.488 166.787 132.895 168.699 133.71 170.361C134.557 171.991 135.716 173.26 137.19 174.169C138.694 175.047 140.403 175.486 142.315 175.486C144.102 175.486 145.669 175.094 147.017 174.311C148.396 173.495 149.462 172.304 150.214 170.737H157.785C156.687 174.091 154.76 176.709 152.001 178.589C149.274 180.439 146.061 181.364 142.362 181.364C139.227 181.364 136.39 180.658 133.851 179.248C131.343 177.806 129.353 175.815 127.88 173.276C126.438 170.737 125.717 167.853 125.717 164.624ZM185.742 148.261V153.575H176.996V181.081H170.413V153.575H161.667V148.261H185.742ZM197.128 148.261V181.081H190.545V148.261H197.128ZM218.866 181.411C215.794 181.411 212.973 180.69 210.402 179.248C207.832 177.806 205.794 175.815 204.29 173.276C202.785 170.706 202.033 167.806 202.033 164.577C202.033 161.38 202.785 158.512 204.29 155.973C205.794 153.402 207.832 151.396 210.402 149.954C212.973 148.512 215.794 147.791 218.866 147.791C221.969 147.791 224.791 148.512 227.33 149.954C229.9 151.396 231.922 153.402 233.395 155.973C234.9 158.512 235.652 161.38 235.652 164.577C235.652 167.806 234.9 170.706 233.395 173.276C231.922 175.815 229.9 177.806 227.33 179.248C224.759 180.69 221.938 181.411 218.866 181.411ZM218.866 175.533C220.841 175.533 222.581 175.094 224.085 174.216C225.59 173.307 226.765 172.022 227.612 170.361C228.458 168.699 228.881 166.772 228.881 164.577C228.881 162.383 228.458 160.471 227.612 158.841C226.765 157.179 225.59 155.91 224.085 155.032C222.581 154.154 220.841 153.716 218.866 153.716C216.891 153.716 215.136 154.154 213.6 155.032C212.095 155.91 210.92 157.179 210.073 158.841C209.227 160.471 208.804 162.383 208.804 164.577C208.804 166.772 209.227 168.699 210.073 170.361C210.92 172.022 212.095 173.307 213.6 174.216C215.136 175.094 216.891 175.533 218.866 175.533ZM268.621 181.081H262.038L247.133 158.559V181.081H240.55V148.214H247.133L262.038 170.784V148.214H268.621V181.081Z" fill="white" />
                        <defs>
                            <clipPath id="clip0_205_19">
                                <rect width="191.968" height="121.67" fill="white" transform="translate(40.0215)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="form" style={{width : '350px'}}>
                        <form onSubmit={(e) => submitForm(e)} className='border rounded-4 p-3'>
                            <h3 className='mb-4'>Login with Voter Card No.</h3>
                            
                            <label className='mb-2 d-flex justify-content-start' >Vote Card Number</label><input onChange={inputHandle } name='cardNo' placeholder='Enter Name' className='mb-2 p-1 rounded d-flex justify-content-start' type='text' style={{width: '320px'}}></input>
                            <label className='mb-2 d-flex justify-content-start'>Password:</label><input onChange={inputHandle } name='password' placeholder='Enter password' className='mb-3 p-1 rounded d-flex justify-content-start' type='password' style={{width: '320px'}}></input>
                           <button  className='rounded text-white ps-5 pe-5 mb-3 mt-4' style={{ backgroundColor: "#1a257e", width : '320px', textAlign: 'center' }}>Submit</button>
                           <button onClick={adminLoginPage} className='rounded text-white ps-5 pe-5 mb-3 mt-4' style={{ backgroundColor: "#1a257e", width : '320px', textAlign: 'center' }}>Login as Admin</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserLoginForm
