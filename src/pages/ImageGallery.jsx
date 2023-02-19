import { Grid} from "@mui/material";
import React from "react";

export const ImageGallery = ({ images }) => {
  return (
    <Grid container spacing={1}>
      {images?.map((image) => (
        <Grid key={image.id} item md={4} xs={12}>
          <img
            loading="lazy"
            src={image.img}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
