import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const HOT_URL="https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1609071285028-111c8ccff5bf?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL: info.temp>15 ? HOT_URL:COLD_URL}
        title="green iguana"
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80?<ThunderstormIcon />: info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature= {info.temp}&deg;C</p>
        <p>Humidity= {info.humidity}</p>
        <p>Min Temp= {info.tempMin}&deg;C</p>
        <p>Max Temp= {info.tempMax}&deg;C</p>
        <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
        </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}