import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAds } from '../config/firebase';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BsHeart } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import  userAdd from '../store/ads/adsAction'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function NewCard() {
    const [ads, setAds] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(async () => {
        const tempAds = await getAds()
        setAds(tempAds)
       
    }, [])
    console.log(ads)
    useEffect(()=>{
        dispatch(userAdd(ads))
    },[ads] )

    return (
        <Container>
<h3 style={{ marginTop : 30,fontFamily : 'sans-serif' }} >  Fresh Recommondation  </h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {ads.map(cardItem => (
                        <Grid item md={3} xs={12} sm={6}   >
                            <Card sx={{ maxWidth: 345, mt: "2rem" }}
                             className=" shadow p-3 mb-5 bg-white rounded" 
                             onClick={() => { navigate(`/detail/${cardItem.id}`) }}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={cardItem.urls[0]}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {cardItem.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {cardItem.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions   >
                                    {/* <Button size="small" color="primary">
            Share
          </Button> */}
                                    <BsHeart />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>

    )
}

export default NewCard