import { Container, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getHotels } from "../api/request";
import { HotelCard } from "../components/HotelCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const fetchHotels = async () => {
    const { data } = await getHotels();
    return data;
  };

  const { data, isLoading } = useQuery("hotels", fetchHotels);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {data?.map((item) => (
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
