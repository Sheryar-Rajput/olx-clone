import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAdDetails } from '../config/firebase'
import Avatar from '@mui/material/Avatar';
import avatar from '../images/avatar.png'
import { IconBsFillTelephoneFillName } from "react-icons/bs";
import './detail.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import AppBar from './navbar';
import Footer from './footer'
import { FormatUnderlinedSharp } from '@material-ui/icons';
import { Box, Typography, } from '@material-ui/core';
import { Stack } from '@mui/material';
function Detail() {
  const params = useParams()
  console.log('params --->', params.adId)
  const [data, setData] = useState([])
  const newAds = useSelector(state => state.ads)
  console.log(data.urls)
  useEffect(async () => {
    const tempdetail = await getAdDetails(params.adId)
    setData(tempdetail)
  }, [])
  if (!data) {
    console.log(data)
    return <div> loading </div>
  }
  return (
    <div >
      <AppBar />
      <Stack >
        <Box sx={{ display: { lg: 'flex', md: 'flex' },padding : 10 }} >
          <Box sx={{
            width: { lg: "60%", md: "100%", sm: '100%' },
            display: { lg: 'flex', md: 'flex', sm: 'flex' },
            backgroundColor: '#F0F0F0',
            justifyContent : 'center',
            alignItems : 'center',
            
          }} >

            <Carousel>
              {data?.urls?.map((urls) => (
                <Carousel.Item>
                  <Image
                    src={urls}
                    width='500'
                    height='350'
                  />
                </Carousel.Item>
              ))}
            </Carousel>

          </Box>
          <Box sx={{ width: "40%", display: { md: 'flex', sm: 'block' } }} >
            <Box sx={{ padding: 20 }} >

              <Typography variant='h5'>
                Title
              </Typography>
              <Typography variant='body1'>
                {data.description}
              </Typography>
              <Typography variant='h5'>
                Price
              </Typography>
              <Typography variant='body1'>
                {data.price}
              </Typography>

              <Typography variant='h5'>
                Description
              </Typography>
              <Typography variant='body1'>
                {data.description}
              </Typography>
            </Box>
            <Box sx={{ padding: 20, display: { md: 'flex', sm: 'block' } }}>
              <Typography variant='h4' align='center' >
                Contact Seller
              </Typography>            <Avatar src={avatar} />
              <h3> Name   </h3>
              <p>  Sheryar  </p>

              <h3> Phone  </h3>
              <p>  03461120174  </p>
            </Box>
          </Box>
        </Box>
      </Stack>




      <Footer />
    </div>
  )
}

export default Detail