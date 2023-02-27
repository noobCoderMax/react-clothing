import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLoadingStore } from '../store/index'

axios.defaults.baseURL = "http://localhost:5555",
  axios.defaults.timeout = 5000

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log("axios Config", config);
  return config
})

axios.interceptors.response.use(undefined, (error: AxiosError) => {

})


const useAxio = () => {
  const nav = useNavigate()
  const table: Record<string, undefined | (() => void)> = {
    401: () => {
      alert("请登录后访问")
    },
    402: () => {
      alert("需要付费")
    },
    403: () => {
      alert("登录过期，请重新登录之后访问")
      nav('/login')
    },
    undefined: () => {
      alert("其他错误(暂未处理)-useAxios")
    }
  }

  const onError = (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response
      const fn = table[status]
      fn?.()
    }
  }

  return {
    get: (path: string, config?: AxiosRequestConfig) => {
      return axios.get(path, config).catch(onError)
    },
    post: (path: string, data?: any, config?: AxiosRequestConfig) => {
      return axios.post(path, data, config).catch(onError)
    },
    put: (path: string, data?: any, config?: AxiosRequestConfig) => {
      return axios.put(path, data, config).catch(onError)
    },
    petch: (path: string, data?: any, config?: AxiosRequestConfig) => {
      return axios.patch(path, data, config).catch(onError)
    },
    delete: (path: string, config?: AxiosRequestConfig) => {
      return axios.delete(path, config).catch(onError)
    }
  }
}


// const useAxios = (url: string, method: string, param?: any) => {
//   const [data, setData] = useState<AxiosResponse<any, any>>()
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     setLoading(true)
//     axios({
//       method: method,
//       url: url,
//       data: param
//     }).then(res => {
//       setData(res)
//       setLoading(false)
//     }, err => {
//       setError(err)
//       setLoading(false)
//     })
//   }, [url])

//   return [
//     data, loading, error
//   ]
// }

export default useAxio


