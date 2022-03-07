import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { dashboard } from 'src/views/dashboard/Dashboard'


const Forgetpassword = (props) => {
  const history = useHistory();
  
  
  return (
    <>
      <div style={{
        backgroundImage: `url("https://blog.hubspot.com/hubfs/become-medical-sales-rep.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <section className='vh-100 d-flex flex-column align-items-center justify-content-center '>
         
          
          <div className='container-fluid' >
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-md-9 col-lg-6 col-xl-5'>
                <img
                  src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5'>
                
                  <div className=''>
                    <h2 className='mb-0 me-3 text-center'>Forget password</h2>
                    <hr />
                    <div className='form-outline mb-2'>
                      <label className='form-label' htmlFor='username'>
                        <h5>Register Email:</h5>
                      </label>
                      <input
                        type='text'
                        name='Email'
                        required= 'required'
                        className='form-control form-control-sm'
                        placeholder='Enter a your Resister Email'
                        autoComplete='Email'
                      />
                    </div>
                    <div className='text-center text-lg-start mt-4 pt-2 text align-center'>
                      <div className='row-12 text align-center form-outline mb-2'>
                        <button
                          type="submit"
                          className='col-12  btn btn-primary btn-bg '
                          style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
                        >
                          otp Send
                        </button>
                      </div>
                    </div>
                   
                    
                  </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Forgetpassword;
