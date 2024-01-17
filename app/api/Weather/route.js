import { NextResponse } from "next/server"
import axios from "axios"

export async function GET()
{    
     KEY = process.env.WEATHER_APP_API_KEY

     lat = 53.4808
     lon = 2.2426
     
     try 
     {
          // const cordinates = await axios.get(APILINKCordinates)
          // if (cordinates.status != "OK") 
          // {
          //      return NextResponse.error("Error with cordinates")
          // }

          const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`)
          return NextResponse({data: weather})
         
     } 
     catch (error) 
     {
          console.error(error)
     }
}