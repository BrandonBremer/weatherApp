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
  <div>
    <Card.Group>
  <Card>
  <Card.Content>

      <p>0:00</p>
      <p>Temprature: {weatherData.hourly[0].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[0].weather[0].description}</p>
      {selectImage(weatherData.hourly[0].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p align>1:00</p>
      <p>Temprature: {weatherData.hourly[1].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[1].weather[0].description}</p>
      {selectImage(weatherData.hourly[1].weather[0].description)}
      
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>2:00</p>
      <p>Temprature: {weatherData.hourly[3].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[3].weather[0].description}</p>
      {selectImage(weatherData.hourly[3].weather[0].description)}
     
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>3:00</p>
      <p>Temprature: {weatherData.hourly[4].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[4].weather[0].description}</p>
      {selectImage(weatherData.hourly[4].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>4:00</p>
      <p>Temprature: {weatherData.hourly[5].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[5].weather[0].description}</p>
      {selectImage(weatherData.hourly[5].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>5:00</p>
      <p>Temprature: {weatherData.hourly[6].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[6].weather[0].description}</p>
      {selectImage(weatherData.hourly[6].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>6:00</p>
      <p>Temprature: {weatherData.hourly[7].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[7].weather[0].description}</p>
      {selectImage(weatherData.hourly[7].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>7:00</p>
      <p>Temprature: {weatherData.hourly[8].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[8].weather[0].description}</p>
      {selectImage(weatherData.hourly[8].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>8:00</p>
      <p>Temprature: {weatherData.hourly[9].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[9].weather[0].description}</p>
      {selectImage(weatherData.hourly[9].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>9:00</p>
      <p>Temprature: {weatherData.hourly[10].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[10].weather[0].description}</p>
      {selectImage(weatherData.hourly[10].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>10:00</p>
      <p>Temprature: {weatherData.hourly[11].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[11].weather[0].description}</p>
      {selectImage(weatherData.hourly[11].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>11:00</p>
      <p>Temprature: {weatherData.hourly[12].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[12].weather[0].description}</p>
      {selectImage(weatherData.hourly[12].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>12:00</p>
      <p>Temprature: {weatherData.hourly[13].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[13].weather[0].description}</p>
      {selectImage(weatherData.hourly[13].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>13:00</p>
      <p>Temprature: {weatherData.hourly[14].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[14].weather[0].description}</p>
      {selectImage(weatherData.hourly[14].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>14:00</p>
      <p>Temprature: {weatherData.hourly[15].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[15].weather[0].description}</p>
      {selectImage(weatherData.hourly[15].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>15:00</p>
      <p>Temprature: {weatherData.hourly[16].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[16].weather[0].description}</p>
      {selectImage(weatherData.hourly[16].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>16:00</p>
      <p>Temprature: {weatherData.hourly[17].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[17].weather[0].description}</p>
      {selectImage(weatherData.hourly[17].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>17:00</p>
      <p>Temprature: {weatherData.hourly[18].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[18].weather[0].description}</p>
      {selectImage(weatherData.hourly[18].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>18:00</p>
      <p>Temprature: {weatherData.hourly[19].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[19].weather[0].description}</p>
      {selectImage(weatherData.hourly[19].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>19:00</p>
      <p>Temprature: {weatherData.hourly[20].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[20].weather[0].description}</p>
      {selectImage(weatherData.hourly[20].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>20:00</p>
      <p>Temprature: {weatherData.hourly[21].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[21].weather[0].description}</p>
      {selectImage(weatherData.hourly[21].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>21:00</p>
      <p>Temprature: {weatherData.hourly[22].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[22].weather[0].description}</p>
      {selectImage(weatherData.hourly[22].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>22:00</p>
      <p>Temprature: {weatherData.hourly[23].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[23].weather[0].description}</p>
      {selectImage(weatherData.hourly[23].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>23:00</p>
      <p>Temprature: {weatherData.hourly[24].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[24].weather[0].description}</p>
      {selectImage(weatherData.hourly[24].weather[0].description)}
      <img src={image} height = "50px"/>
      
  </Card.Content>
</Card>
<Card>
  <Card.Content>
      <p>0:00</p>
      <p>Temprature: {weatherData.hourly[24].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[24].weather[0].description}</p>
      {selectImage(weatherData.hourly[24].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>1:00</p>
      <p>Temprature: {weatherData.hourly[25].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[25].weather[0].description}</p>
      {selectImage(weatherData.hourly[25].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>2:00</p>
      <p>Temprature: {weatherData.hourly[26].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[26].weather[0].description}</p>
      {selectImage(weatherData.hourly[26].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>3:00</p>
      <p>Temprature: {weatherData.hourly[27].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[27].weather[0].description}</p>
      {selectImage(weatherData.hourly[27].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>4:00</p>
      <p>Temprature: {weatherData.hourly[28].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[28].weather[0].description}</p>
      {selectImage(weatherData.hourly[28].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>5:00</p>
      <p>Temprature: {weatherData.hourly[29].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[29].weather[0].description}</p>
      {selectImage(weatherData.hourly[29].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>6:00</p>
      <p>Temprature: {weatherData.hourly[30].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[30].weather[0].description}</p>
      {selectImage(weatherData.hourly[30].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>7:00</p>
      <p>Temprature: {weatherData.hourly[31].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[31].weather[0].description}</p>
      {selectImage(weatherData.hourly[31].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>8:00</p>
      <p>Temprature: {weatherData.hourly[32].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[32].weather[0].description}</p>
      {selectImage(weatherData.hourly[32].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>9:00</p>
      <p>Temprature: {weatherData.hourly[33].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[33].weather[0].description}</p>
      {selectImage(weatherData.hourly[33].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>10:00</p>
      <p>Temprature: {weatherData.hourly[34].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[34].weather[0].description}</p>
      {selectImage(weatherData.hourly[34].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>11:00</p>
      <p>Temprature: {weatherData.hourly[35].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[35].weather[0].description}</p>
      {selectImage(weatherData.hourly[35].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>12:00</p>
      <p>Temprature: {weatherData.hourly[36].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[36].weather[0].description}</p>
      {selectImage(weatherData.hourly[36].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>13:00</p>
      <p>Temprature: {weatherData.hourly[37].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[37].weather[0].description}</p>
      {selectImage(weatherData.hourly[37].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>14:00</p>
      <p>Temprature: {weatherData.hourly[38].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[38].weather[0].description}</p>
      {selectImage(weatherData.hourly[38].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>15:00</p>
      <p>Temprature: {weatherData.hourly[39].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[39].weather[0].description}</p>
      {selectImage(weatherData.hourly[39].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>16:00</p>
      <p>Temprature: {weatherData.hourly[40].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[40].weather[0].description}</p>
      {selectImage(weatherData.hourly[40].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>17:00</p>
      <p>Temprature: {weatherData.hourly[41].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[41].weather[0].description}</p>
      {selectImage(weatherData.hourly[41].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>18:00</p>
      <p>Temprature: {weatherData.hourly[42].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[42].weather[0].description}</p>
      {selectImage(weatherData.hourly[42].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>19:00</p>
      <p>Temprature: {weatherData.hourly[43].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[43].weather[0].description}</p>
      {selectImage(weatherData.hourly[43].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>20:00</p>
      <p>Temprature: {weatherData.hourly[44].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[44].weather[0].description}</p>
      {selectImage(weatherData.hourly[44].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>21:00</p>
      <p>Temprature: {weatherData.hourly[45].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[45].weather[0].description}</p>
      {selectImage(weatherData.hourly[45].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>22:00</p>
      <p>Temprature: {weatherData.hourly[46].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[46].weather[0].description}</p>
      {selectImage(weatherData.hourly[46].weather[0].description)}
      <img src={image} height = "50px"/>
      </Card.Content> </Card>
      
      <Card><Card.Content>
      <p>23:00</p>
      <p>Temprature: {weatherData.hourly[47].temp} &deg;C</p>
      <p>Description: {weatherData.hourly[47].weather[0].description}</p>
      {selectImage(weatherData.hourly[47].weather[0].description)}
      <img src={image} height = "50px"/>
      
  </Card.Content>
</Card>
</Card.Group>
</div>
)

export default CardExampleCard;