import React, { useState } from "react";
import s from './index.module.less'

type Props = {
  images:string[]
}

const ClothingShow: React.FC<Props> = ({images}) => {

  console.log("images", images);
  const [imgIndex,setImgIndex] = useState(0)

  return <div className={s.clothing}>
    <img className={s.clothing_img} src={images[imgIndex]} alt="" />
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