import React from 'react';
import { Card } from 'semantic-ui-react';
const CardExampleCard = ({hourlyData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {hourlyData.name}</Card.Header>
        <p>Temprature: {hourlyData.list.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(hourlyData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(hourlyData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {hourlyData.list.weather[0].main}</p>
        <p>Humidity: {hourlyData.list.main.humidity} %</p>
        
    </Card.Content>
  </Card>
)

export default CardExampleCard;