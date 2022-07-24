import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { BsHeart } from "react-icons/bs";
import { getAds } from '../config/firebase';
import { Container } from '@material-ui/core';
import './card.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Cards() {
  const [ads, setAds] = useState([])
  const navigate = useNavigate()

  useEffect(async () => {
    const tempAds = await getAds()
    setAds(tempAds)
  }, [])
  console.log(ads)
  return (

   


    <div className='mainHeading  '  >
      {/* <h3  >Fresh Recommondation</h3> */}
      <br/>
        {ads.map(item => {
          const { description, title, price, id,urls } = item
          return <Container className='mainDiv'  >

            <Card className="Add shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}
              onClick={() => { navigate(`/detail/${id}`) }} >
              <Card.Img variant="top" src={urls[0]}
                width='290' height="160" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {description}

                  <BsHeart style={{ float: "right" }} />
                </Card.Text>
                <h6> {price} </h6>
              </Card.Body>

              <small className="text-muted">Karachi,Pakistan</small>
            </Card>
         </Container>
        })}
    </div>

  )
}

export default Cards