import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {store } from "./weatherApp";
import { useContext, useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({info}){



let cold_url="https://images.unsplash.com/photo-1610215868058-f9879ac512c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29vbCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
let hot_url="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let rain_url="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const [error,setError]= useContext(store);
    
if(error){
  return (
    <div className="InfoBox">
        <h3 style={{color: "red"}}>Weather Info - No such City Found</h3>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="error"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Error
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <h1>Error: Your entered City is not found in our API.</h1>
         
         
         
        </Typography>
      </CardContent>
      
    </Card>
    
    </div>
  );
}
return(
      
    <div className="Info-Box">
        <h3 style={{color: "white"}}>Weather INFO - {info.weather}</h3>
        <div className="InfoBox">  

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? rain_url : info.temp> 18 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp> 18 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}&deg;C</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i></i>{info.weather} and feels like {info.feelslike}&deg;C</p>
         
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}