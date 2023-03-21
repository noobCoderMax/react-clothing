import axios from "axios";
import { nanoid } from "nanoid";

export const uploadUrl: string = "test.kuugacoder.top";
const upload_qiniu = () => axios.get("http://localhost:5555/other/qntoken")
export const domain: string = "http://upload-z1.qiniup.com";


export const uploadQn = async (file: string | Blob )=> {
  const formdata = new FormData();

   await upload_qiniu().then(data => {
    // 要上传的文件
    formdata.append("file", file);
    // 后端接口拿到的上传token
    formdata.append("token",data.data as unknown as string);
    // 名称
    formdata.append("key", "clothing_" + nanoid());
   })
  
   const datas = await axios.post(domain, formdata, {
    headers: {
      "content-type": "multipart/form-data"
    },
  })

  return datas

}
