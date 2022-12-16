import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  ListItem,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ImageGallery } from "./ImageGallery";
import { useParams } from "react-router-dom";
import { BookingModal } from "../components/BookingModal";
import { Toaster } from "react-hot-toast";
import { getHotelBySlug } from "../api/request";

export default function HotelInfo() {
  const [hotelInfo, setHotelInfo] = useState();
    const [open, setOpen] =useState(false);

  const params = useParams();
  const { slug } = params;

  const fetchHoteInfo = async () => {
    const {data} = await getHotelBySlug(slug);
    setHotelInfo(data);
  };


  useEffect(()=>{
    fetchHoteInfo();
    
  },[slug])


  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false)

  return (
    <>
      <Navbar />
      <main>
        <Container
          maxWidth={"lg"}
          sx={{
            marginTop: 2,
          }}
        >
          <Typography fontSize={22} sx={{ lineHeight: 1.9, marginBottom: 3 }}>
            {hotelInfo?.name}
          </Typography>
          <ImageGallery images={hotelInfo?.images}/>

          <Box
            sx={{ display: "flex", marginTop: 2, gap: "0 12px", color: "gray" }}
          >
            {hotelInfo?.rooms.map(room=>
              <Typography 
              key={room.id}
              variant="caption">{room.content}</Typography>
              )}
            
            
          
          </Box>
          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          {hotelInfo?.aboutThePlace}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h5">What this place offers!!</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "sace-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 1 }}>
                {hotelInfo?.features.map(feature=>
                <ListItem key={feature.id}>{feature.text}</ListItem>
                  )}
              
              </Box>
              <Card>
                <CardContent>
                  <Button onClick={handleOpen} variant="outlined">Reserve</Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </main>
      <BookingModal hotelInfo={hotelInfo&&hotelInfo} open={open} handleClose={handleClose}/>
      <Toaster
      position="top-right"
      toastOptions={{
        duration:1500,
        style:{
          fontSize:14
        }
      }}
      />
    </>
  );
}
