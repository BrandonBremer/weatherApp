import React from 'react';
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
    <Card.Group>
  <Card>
  <Card.Content>
      <Card.Header className="header">Daily Weather</Card.Header>
      <p>Monday</p>
      <p>Temprature: {weatherData.daily[0].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[0].weather[0].description}</p>
      {selectImage(weatherData.daily[0].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Tuesday</p>
      <p>Temprature: {weatherData.daily[1].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[1].weather[0].description}</p>
      {selectImage(weatherData.daily[1].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Wednesday</p>
      <p>Temprature: {weatherData.daily[3].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[3].weather[0].description}</p>
      {selectImage(weatherData.daily[3].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Thursday</p>
      <p>Temprature: {weatherData.daily[4].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[4].weather[0].description}</p>
      {selectImage(weatherData.daily[4].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Friday</p>
      <p>Temprature: {weatherData.daily[5].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[5].weather[0].description}</p>
      {selectImage(weatherData.daily[5].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Saturday</p>
      <p>Temprature: {weatherData.daily[6].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[6].weather[0].description}</p>
      {selectImage(weatherData.daily[6].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>Sunday</p>
      <p>Temprature: {weatherData.daily[7].temp.day} &deg;C</p>
      <p>Description: {weatherData.daily[7].weather[0].description}</p>
      {selectImage(weatherData.daily[7].weather[0].description)}
      <img src={image} height = "50px"/>
      
  </Card.Content>
</Card></Card.Group>
)

export default CardExampleCard;