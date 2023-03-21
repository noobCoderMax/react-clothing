import { uploadUrl } from "../api/other/qiniu"

export const linkUrl = (key: string):string => {
  return `http://${uploadUrl}/${key}`
}