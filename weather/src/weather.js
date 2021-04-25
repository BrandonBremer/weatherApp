
import { Card } from 'semantic-ui-react';
import rain from './rainy.jpg';
import sun from './sun.png';
import cloud from './cloud.jpg';
var image;

const selectImage = (weatherData) =>
{
    var weather = weatherData.toString();
    if(weather.includes("rain"))
      image = rain;
    else if (weather.includes("sun"))
      image = sun;
    else 
      image = cloud;
}
 
const CardExampleCard = ({weatherData}) => (
    <div>
  <Card>
    <Card.Content>
        <Card.Header className="header">Current Weather</Card.Header>
        <p>Temprature: {weatherData.current.temp} &deg;C</p>
        <p>Description: {weatherData.current.weather[0].description}</p>
        {selectImage(weatherData.current.weather[0].description)}
        <img src={image} height = "50px"/>
    </Card.Content>
  </Card>
  
  </div>
)

export default CardExampleCard;