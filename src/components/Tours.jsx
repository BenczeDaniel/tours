import React from 'react'
import {useQuery} from 'react-query';
import  axios  from 'axios';


const getData = async () => {
    const response = axios.get('https://course-api.com/react-tours-project')
    return await response

}

export const Tours=()=> {
    const {data,status} =useQuery('tours',getData)

    console.log(data)
  return (
    <div>
        {status=='error'  && <div>Error Patching DATA...</div>}
        {status=='loading' && <div>Loading...</div>}
        {status=='success' && <div>Correct data </div>}
    </div>
  )
}
