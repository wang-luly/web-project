interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface Current {
  temp_c: number;
  temp_f: number;
  // 其他字段可以加
}


interface WeatherData{
    location:Location,
    current:Current
}
import axios from 'axios';
async function getWeatherData(city:string):Promise<WeatherData>{
    const response=await axios.get<WeatherData>('https://api.weatherapi.com/v1/current.json',{
        params:{
            key:'d1edb0a97cbd469893b140018252410',
            q:city
        }
    });
    return response.data;
}

getWeatherData('nanjing').then(data=>{
    console.log(data.location.name,data.current.temp_c);
});