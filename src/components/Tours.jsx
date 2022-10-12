import React from 'react'
import {useQuery} from 'react-query';
import  axios  from 'axios';
import {Tour} from './Tour';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const getData = async () => {
    const response = axios.get('https://course-api.com/react-tours-project')
    return await response

}

export const Tours=()=> {
    const {data,status} =useQuery('tours',getData)
    //status=='success' && console.log(data,typeof(data),Object.keys(data),data.data)
    status=='success' && console.log(data.data)

  return (
    <Box sx={{ width: '100%' }}>
       <Typography variant="h3" gutterBottom display="flex" justifyContent="center" sx={{textDecoration:'underline',color:"#1976d2"}}>
        Our Tours
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {status=='error'  && <div>Error Patching DATA...</div>}
        {status=='loading' && <div>Loading...</div>}
        {status=='success' && data.data.map(obj=>(
          <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center"  >
        <Tour key={obj.id} {...obj}/>
        </Grid>
        ))}
      </Grid>
        
    </Box>
  )
}
