import axios from "axios"

const BASE_URL='https://hotels-api-one.vercel.app/api'


const getHotels=()=>axios.get(`${BASE_URL}/hotels`)

const getHotelBySlug=(slug)=>axios.get(`${BASE_URL}/hotels/${slug}`)


export {getHotels,getHotelBySlug}
