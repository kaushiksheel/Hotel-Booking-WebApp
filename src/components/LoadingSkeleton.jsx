import { Container, Grid, Skeleton } from '@mui/material'
import React from 'react'

export const LoadingSkeleton = () => {
  return (
<>
<Skeleton animation='wave' variant="rectangular" width={'100%'} height={61.19} />
<Container maxWidth='lg'>
<Grid container spacing={2} marginTop={3}>
            {[...Array(10)]?.map((item,index)=>
            <Grid key={index} item xs={12} md={4} >
            <Skeleton 
            animation='wave'
            variant="rectangular" width={'100%'} height={373.33} />
            </Grid>
            )}
          
          </Grid>
</Container>
</>
  )
}
