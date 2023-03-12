import { FC } from "react";
import { LoadingOutlined } from '@ant-design/icons'

const loadingStyle: React.CSSProperties = {
  width: '100%',
  height: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Loading: FC = () => {
  return <div style={loadingStyle}>
    <LoadingOutlined />
  </div>
}
export default Loading