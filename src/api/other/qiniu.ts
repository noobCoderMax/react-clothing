import axios from "axios";
import { nanoid } from "nanoid";

const server = axios.create({
  baseURL: "http://localhost:3333",
});

export const upload_qiniu = () =>
  server.get("api/qntoken").then((res) => res.data);

export const domain: string = "http://upload-z1.qiniup.com";
export const uploadUrl: string = "rla2pexuc.hb-bkt.clouddn.com";

const uploadQn = (req: any) => {
  const config: any = {
    Headers: {
      "content-type": "multipart/form-data",
    },
  };
  let fileType: string = "";

  fileType = req.type === "image/png" ? "png" : "jpg";

  const fileName: string = "blog" + nanoid();
  let formdata = new FormData();

  upload_qiniu().then((data) => {
    formdata.append("file", req.file);
    formdata.append("token", data);
    formdata.append("ken", fileName);

    axios
      .post(domain, formdata, config)
      .then((res) => {
        // blog.imgSrc = `http://${uploadUrl}/${res.data.key}`;
        // ElMessage.success({
          // message: "上传封面成功！",
        // });
      // })
      // .catch((err) => {
        // ElMessage.error({
          // message: "上传封面出错了！",
        // });
      });
  });
};