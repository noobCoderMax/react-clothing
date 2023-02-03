import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

const useAxios = (url:string,method:string,param?:any) => {
  const [data,setData] = useState<AxiosResponse<any, any>>()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios({
      method: method,
      url: url,
      data:param
    }).then(res => {
      setData(res)
      setLoading(false)
    }, err => {
      setError(err)
      setLoading(false)
    })
  }, [url])
  
  return [
    data,loading,error
  ]
}

export default useAxios