import { Grid, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

export const ImageGallery = ({images}) => {


        
        const img="https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"

        
    
     
  return (
<Grid container spacing={1}>
  {images?.map(image=>
  <Grid key={image.id} item md={4} xs={12}>
    <img loading='lazy' src={image.img} style={{width:'100%',height:'100%'}}/>
  </Grid>
    )}

</Grid>
  )
}
