import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { useLoadingStore } from '../store/index'

const request = axios.create({
  baseURL: "http://192.168.0.9:5555",
  // baseURL: "/api",
  timeout: 10000,
  withCredentials: true
})
// request.defaults.withCredentials = true

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

request.interceptors.response.use((response) => {
  return response.data
}, (error: AxiosError) => {
  console.log("request.interceptors.response", error);
})

type Options = {
  showLoading?: boolean,
  handleError?: boolean
}


const useAxio = (option?: Options) => {
  const nav = useNavigate()
  const { setLoading } = useLoadingStore()
  const showLoading = option?.showLoading || false
  const handleError = option?.handleError || false

  const table: Record<string, undefined | (() => void)> = {
    401: () => {
      alert("请登录后访问")
      nav('/login')
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

  const ajax = {
    get: <T,>(path: string, config?: RawAxiosRequestConfig) => {
      return request.get<T>(path, config).catch(onError)
    },
    post: <T,>(path: string, data?: any, config?: RawAxiosRequestConfig) => {
      if (showLoading) setLoading(true)
      return request.post<T>(path, data, config)
        .finally(() => {
          if (showLoading)
            setLoading(false)
        })
    },
    put: <T,>(path: string, data?: any, config?: RawAxiosRequestConfig) => {
      return request.put<T>(path, data, config).catch(onError)
    },
    patch: <T,>(path: string, data?: any, config?: RawAxiosRequestConfig) => {
      return request.patch<T>(path, data, config).catch(onError)
    },
    delete: <T,>(path: string, config?: RawAxiosRequestConfig) => {
      return request.delete<T>(path, config).catch(onError)
    }
  }

  return ajax
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


