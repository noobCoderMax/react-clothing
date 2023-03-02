import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { useLoadingStore } from '../store/index'
const request = axios.create({
  baseURL: "http://localhost:5555",
  timeout: 10000
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

request.interceptors.response.use((response) => {
  return response.data
}, (error: AxiosError) => {

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
    get: (path: string, config?: RawAxiosRequestConfig) => {
      return request.get(path, config).catch(onError)
    },
    post: (path: string, data?: any, config?: RawAxiosRequestConfig) => {
      if (showLoading) setLoading(true)
      return request.post(path, data, config)
        .finally(() => {
          if (showLoading)
            setLoading(false)
        })
    },
    put: (path: string, data?: any, config?: RawAxiosRequestConfig) => {
      return request.put(path, data, config).catch(onError)
    },
    petch: (path: string, data?: any, config?: RawAxiosRequestConfig) => {
      return request.patch(path, data, config).catch(onError)
    },
    delete: (path: string, config?: RawAxiosRequestConfig) => {
      return request.delete(path, config).catch(onError)
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


