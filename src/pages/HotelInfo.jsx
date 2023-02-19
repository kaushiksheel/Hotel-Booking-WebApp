import {
  Box,
  Button,
  CardContent,
  Container,
  ListItem,
  Typography,
} from "@mui/material";
import React, {  useState } from "react";
import { Navbar } from "../components/Navbar";
import { ImageGallery } from "./ImageGallery";
import { useParams } from "react-router-dom";
import { BookingModal } from "../components/BookingModal";
import { Toaster } from "react-hot-toast";
import { getHotelBySlug } from "../api/request";
import { useQuery } from "react-query";

export default function HotelInfo() {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const { slug } = params;

  const fetchHoteInfo = async () => {
    const { data } = await getHotelBySlug(slug);
    return data;
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const { data } = useQuery("hotel-info", fetchHoteInfo);

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
            {data?.name}
          </Typography>
          <ImageGallery images={data?.images} />

          <Box
            sx={{ display: "flex", marginTop: 2, gap: "0 12px", color: "gray" }}
          >
            {data?.rooms.map((room) => (
              <Typography key={room.id} variant="caption">
                {room.content}
              </Typography>
            ))}
          </Box>
          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            {data?.aboutThePlace}
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
                {data?.features.map((feature) => (
                  <ListItem key={feature.id}>{feature.text}</ListItem>
                ))}
              </Box>

              <CardContent>
                <Button onClick={handleOpen} variant="outlined">
                  Reserve
                </Button>
              </CardContent>
            </Box>
          </Box>
        </Container>
      </main>
      <BookingModal hotelInfo={data} open={open} handleClose={handleClose} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            fontSize: 14,
          },
        }}
      />
    </>
  );
}
