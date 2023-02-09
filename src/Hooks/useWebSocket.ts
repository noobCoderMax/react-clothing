const WS_PORT = 'ws://localhost:3333'

const useWebSocket =
  (handleMessage: (this: WebSocket, ev: Event) => any)=>{
  const ws = new WebSocket(WS_PORT)

  const init = () => {
    bindEvent()
  }

  const bindEvent = () => {
    ws.addEventListener('open',handleOpen,false)
    ws.addEventListener('close',handleClose,false)
    ws.addEventListener('error',handleError,false)
    ws.addEventListener('message',handleMessage,false)
  }

  const handleOpen = () => {
    console.log("WebSocket handleOpen");
  }

  const handleClose = () => {
    console.log("WebSocket handleClose");
  }

  const handleError = () => {
    console.log("WebSocket handleError");
  }

  init()
}

export default  useWebSocket