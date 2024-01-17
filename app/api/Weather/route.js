import { NextResponse } from "next/server"
import axios from "axios"

export async function GET()
{    
     console.log("Request gone to server")
     const KEY = process.env.WEATHER_APP_API_KEY
     
     const lat = 53.4808
     const lon = 2.2426
     
     
     try 
     {
          // const cordinates = await axios.get(APILINKCordinates)
          // if (cordinates.status != "OK") 
          // {
          //      return NextResponse.error("Error with cordinates")
          // }

          const weather = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`)
          
          return NextResponse.json({lat: lat, lon: lon, status:200, data: weather.data}) 
         
     } 
     catch (error) 
     {
          console.log(error)
          return NextResponse.error()
     }
}
