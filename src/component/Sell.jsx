import React, { useState } from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { postAdd} from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Sell() {
const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState("")
const [addImage,setAddimage] = useState([])

const navigate = useNavigate()
const clickAdd = async ()=>{
    try{
     const newAdd = await    postAdd(title,description,price,addImage)
     swal("Success", "", "success");
     navigate("/Dashboard")

    }
    catch (e) {
        swal( e.message , "Ops", "error");
      }
}
const uploadImages= (e)=>{
    setAddimage(e.target.files)
    console.log(addImage)
}
    return (
        <div className='form'  >
            <h1> Post your add  </h1>


            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                        placeholder="Title" required
                    onChange={(e)=>{
                    setTitle(e.target.value)
                    }}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        placeholder="Description" required
                        onChange={(e)=>{
                            setDescription(e.target.value)
                            }}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number"
                        placeholder="Price.." required
                        onChange={(e)=>{
                            setPrice(e.target.value)
                            }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='file' multiple
                        placeholder="adImage"
                        onChange={uploadImages}
                    />
                </Form.Group>

                <Button variant="primary"  onClick={clickAdd}    >
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default Sell