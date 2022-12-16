import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';


export const HotelCard = ({hotel}) => {
  const navigate=useNavigate()
  return (
    <Card   >
      <CardMedia
      sx={{objectFit:'cover'}}
        component="img"
        height="244"
        image={hotel.thumbnail}
        alt="Paella dish"
        loading='lazy'
      />
      <CardContent>
        <Typography sx={{cursor:"pointer"}} onClick={()=>navigate(`/hotels/${hotel.slug}`)} >{hotel.address}</Typography>
        <Typography marginTop={1}  fontSize={14}>${hotel.pricePerNight} night</Typography>

      </CardContent>
      
    </Card>
  )
}
