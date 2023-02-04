import React, { useEffect, useRef, useState } from "react";
import { Magnifier } from "../../utils/magnifier";
import s from './index.module.less'

type Props = {
  images:string[]
}

const ClothingShow: React.FC<Props> = ({ images }) => {
  const imgRef = useRef<HTMLImageElement|null>(null)

  useEffect(() => {
    new Magnifier({
      targit: imgRef.current!,
      scale: 3,
      magnifierSize:300
    })
  },[])

  console.log("images", images);
  const [imgIndex,setImgIndex] = useState(0)

  return <div className={s.clothing}>
    <div className={s.clothing_box}>
      <img className={s.clothing_box_img} src={images[imgIndex]} alt="img" ref={imgRef}/>
      <div className={s.clothing_box_cover}></div>
    </div>
   
    <div className={s.clothing_mini}>
      {
        images.slice(0,5).map((item,index) => {
          return <img
            className={s.clothing_mini_img}
            src={item} alt="image"
            key={item}
            onClick={() => setImgIndex(index)}
            onMouseOver={()=>setImgIndex(index)}  
          />
        })
      }
    </div>
  </div>
}

export default ClothingShow