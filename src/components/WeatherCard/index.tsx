import axios from "axios";
import React, { useEffect, useState } from "react";
import s from './index.module.less'

const WeatherApiData = {
  Appid: "83659665",
  appsecret:"rG1u9nO0" 
}

type Weather = {
 nums?:  string //今日实时请求次数
 cityid?: string //城市ID
 city?:   string          
 date?:   string           
 week?:   string         
 update_time?:   string    //更新时间
 wea?: string  //天气情况
 wea_img?: string  //天气标识
 tem?: string //实况温度
 tem_day?: string  //白天温度(高温)
 tem_night?: string //夜间温度(低温)
 win?: string  //风向
 win_speed?: string //风力
 win_meter?: string  //风速
 air?: string   //空气质量
 pressure?: string  //气压
 humidity?: string//湿度
}

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<Weather>({})
  const [city, setCity] = useState<string>("北京")

const getWeather = async  (city: string) => {
  await axios.get(`https://www.yiketianqi.com/free/day?appid=${WeatherApiData.Appid}&appsecret=${WeatherApiData.appsecret}&unescape=1&city=${city}&vue=1`)
    .then(res => {
    console.log("结果",res.data);
    setWeather(res.data)
  })
}
  
  useEffect(() => {
    getWeather(city)
  }, [])

  const handleCity = () => {
    getWeather(city)
  }
  return <div className={s.weather}>
    <div>城市:{city}</div>
    <input type="text" value={city} onChange={e => setCity(e.target.value)} />
    <button onClick={() => handleCity()}>切换</button>
    <div>weather:{weather.date}</div>
  </div>
}

export default WeatherCard