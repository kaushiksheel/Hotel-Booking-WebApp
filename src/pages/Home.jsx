import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { HotelCard } from "../components/HotelCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";

export default function Home({ setDarkMode }) {
  const fetchHotels = async () => {
    const { data } = await getHotels();
    return data;
  };

  const { data, isLoading } = useQuery("hotels", fetchHotels);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar setDarkMode={setDarkMode} />
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
