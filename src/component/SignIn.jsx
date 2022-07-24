import React from 'react';
import { useState } from 'react';
import { login } from '../config/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import  addUser  from '../store/ads/adsAction'

import swal from 'sweetalert';
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSignin = async() => {
    try{
    const user =  await login(email, password)
    dispatch(addUser(user))
    navigate("/Dashboard")
    swal("Successfully login", "welcome", "success");
    }
    catch{
swal("invalid Email or Password", "Ops", "error");
    }
  }

  return (
    <div className='form'   >
      <h1>SignIn</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={onSignin}     >
    Submit
  </Button> <br/>
  <Form.Text className="text-muted"   onClick={() => navigate('/Signup')}  >
  New user? Register here
          </Form.Text>
      </Form>







    </div>
  )
}

export default SignIn