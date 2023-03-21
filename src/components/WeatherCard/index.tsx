import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import s from './index.module.less'

const WeatherApiData = {
  Appid: "83659665",
  appsecret: "rG1u9nO0"
}

type Weather = {
  nums?: string //今日实时请求次数
  cityid?: string //城市ID
  city?: string
  date?: string
  week?: string
  update_time?: string    //更新时间
  wea?: string//天气情况
  wea_img?: string  //天气标识
  tem?: string //实况温度
  tem_day?: string  //白天温度(高温)
  tem_night?: string //夜间温度(低温)
  win?: string//风向
  win_speed?: string //风力
  win_meter?: string  //风速
  air?: string//空气质量
  pressure?: string  //气压
  humidity?: string//湿度
}

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<Weather>({})
  const [city, setCity] = useState<string>("北京")

  const getWeather = async (city: string) => {
    await
      axios.get(`https://www.yiketianqi.com/free/day?appid=${WeatherApiData.Appid}&appsecret=${WeatherApiData.appsecret}&unescape=1&city=${city}&vue=1`)
        .then(res => {
          if (res.data.errcode === 100) {
            alert('城市不存在,请重新搜索！')
            return
          } else {
            setWeather(res.data)
          }
        })
  }

  useEffect(() => {
    getWeather(city)
  }, [])

  const handleCity = () => {
    getWeather(city)
  }

  return <div className={s.weather}>
    <div className={s.weather_city}>
      <div className={s.weather_city_op}>
        <Input size="small" style={{ width: '100px' }} value={city} onChange={e => setCity(e.target.value)}></Input>
        <Button style={{ marginRight: '10px' }} onClick={() => handleCity()}>搜索</Button>
      </div>
      <div className={s.weather_city_tem}>
        <div className={s.weather_city_tem_number}>{weather.tem} </div>
        <div className={s.weather_city_tem_sign}>℃</div>
      </div>
    </div>
    <div className={s.weather_info}>
      <div className={s.weather_info_time}>{weather.date}  {weather.update_time}  更新</div>
      <div className={s.weather_info_air}>空气质量:{weather.air}</div>
      <div className={s.weather_info_common}><span>天气状况:</span><span>{weather.wea}  </span>       </div>
      <div className={s.weather_info_common}><span>实时风向:</span><span>{weather.win}   </span>      </div>
      <div className={s.weather_info_common}><span>实时风力:</span><span>{weather.win_speed} </span>  </div>
      <div className={s.weather_info_common}><span>最高温度:</span><span>{weather.tem_day}℃</span>   </div>
      <div className={s.weather_info_common}><span>最低温度:</span><span>{weather.tem_night}℃ </span></div>
    </div>
  </div >
}

export default WeatherCard