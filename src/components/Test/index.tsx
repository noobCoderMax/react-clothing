import React, { useEffect, useState } from "react";
import s from './index.module.less'
const Test: React.FC = () => {
  const [img, setImg] = useState('')
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e as any).target.files[0]
    const readObj = new FileReader()
    readObj.onload = () => {
      console.log("压缩之前的base64编码",readObj.result);
      setImg(readObj.result as string)
    }
    readObj.readAsDataURL(file)
  }

  return <div className="flex">
    <input type="file" onChange={e =>handleClick(e)} />
    <div className={s.s}>
      <div>
       <h5>压缩前的图片</h5>
       <img src={img} alt="img" className={s.img} />
      </div>
      <div>
        <h5>压缩后的图片</h5>
        <img src={img} alt="img"  className={s.img_s}/>
    </div>
    </div>
  </div>;
};

export default Test;
