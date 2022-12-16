import { CircularProgress } from "@mui/material"

export const LoadingSpinner=({color,size})=>{
    return (
        <CircularProgress color={color} size={size}/>
    )
}