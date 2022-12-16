import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { HotelCard } from "../components/HotelCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { getHotels } from "../api/request";

export default function Home({ setDarkMode }) {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHotels = async () => {
    setIsLoading(true);
    try {
      const { data } = await getHotels();
      setIsLoading(false);
      setHotels(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar setDarkMode={setDarkMode} />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {hotels?.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <HotelCard hotel={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
