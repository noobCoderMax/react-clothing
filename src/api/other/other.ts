import axios from "axios";

const WeatherApiData = {
  Appid: "83659665",
  appsecret:"rG1u9nO0" 
}

const getWeather = async  (city: string) => {
  await axios.get(`https://www.yiketianqi.com/free/day?appid=${WeatherApiData.Appid}&appsecret=${WeatherApiData.appsecret}&unescape=1&city=${city}&vue=1`)
    .then(res => {
    console.log("data",res.data);
    return res.data
  })
}

export {
  getWeather
}