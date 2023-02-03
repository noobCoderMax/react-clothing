import { useState } from 'react';

const useImgCompress = (base64:string,quality:number,mimeType:string):any => {
  const [compressImg, setCompressImg] = useState('')
  const [Img, setImg] = useState('')
  setImg(base64)
  
  let canvas = document.createElement('canvas')
  let img = document.createElement('img')
  img.src = base64 as string
  img.onload = () => {
    canvas.width = 300
    canvas.height = 300
    let ctx = canvas.getContext('2d')
    ctx!.drawImage(img,0,0,300,300)
    setCompressImg(canvas.toDataURL(mimeType, quality / 100))
  }
  return {
    compressImg,
    Img
  }
}

export default useImgCompress