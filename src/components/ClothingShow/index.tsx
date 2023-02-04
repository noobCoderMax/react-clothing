import React, {  useRef, useState } from "react";
import { Magnifier } from "../../utils/magnifier";
import s from './index.module.less'

type Props = {
  images:string[]
}

const ClothingShow: React.FC<Props> = ({ images }) => {
  const imgRef = useRef<HTMLImageElement|null>(null)
  const [imgIndex,setImgIndex] = useState(0)

  const initMagnifier = () => {
    // init magnifier
     new Magnifier({
      target: imgRef.current!,
      scale: 3,
      magnifierSize:300
    })
  }

  return <div className={s.clothing}>
    <div className={s.clothing_box}>
      <img
        className={s.clothing_box_img}
        src={images[imgIndex]}
        alt="img"
        onClick={() => initMagnifier()}
        ref={imgRef}
      />
    </div>
    <div className={s.clothing_mini}>
      {
        images.slice(0,5).map((item,index) => {
          return <img
            className={s.clothing_mini_img}
            src={item} alt="image"
            key={index}
            onClick={() => setImgIndex(index)}
            onMouseOver={()=>setImgIndex(index)}  
          />
        })
      }
    </div>
  </div>
}

export default ClothingShow