import React from 'react'
import { useState } from 'react'
import { register } from '../config/firebase'
import '../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [name, setName] = useState("")
  const [profileImage,setProfileImage] = useState("")
  const navigate = useNavigate()
  const uploadProfile = (e)=>{
    setProfileImage(e.target.files)
    console.log(profileImage.name)
  }


  const onSignUp = async() => {
   try{
    const temp =  await  register(email, password, number, name,profileImage)
    navigate("/Dashboard") 
   } 
   catch{
     alert("ni chala")
   }
  }
  return (
    <div className='form'>
      <h1>Signup</h1>

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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value)
            }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number"
            placeholder="Enter number "
            onChange={(e) => { setNumber(e.target.value) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file"
            placeholder="adImage"
            onChange={uploadProfile}
          />
        </Form.Group>

        <Button variant="primary" onClick={onSignUp}     >
          Submit
        </Button>

        <Form.Text className="text-muted" onClick={() => navigate('/SignIn')}  >
          Already user ? login  here
        </Form.Text>
      </Form>






    </div>



  )
}

export default Signup