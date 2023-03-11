class WebSocketMe {
  ws: WebSocket
  
  constructor(options: string) {
    this.ws = new WebSocket(options)    
  }

  init() {
    this.ws.onopen = this.handleOpen
    this.ws.onclose = this.handleClose
    this.ws.onerror = this.handleError
    this.ws.onmessage = this.handleMessage
  }

  handleOpen() {
    console.log("webSocket connected");
  }
  handleClose() {
    console.log("webSocket disConnected");
  }
  handleError() {
    console.log("webSocket Error");
  }
  handleMessage(this: WebSocket, ev: MessageEvent<any>):any {
    console.log("this",this);
    console.log("ev",ev);
  }

}

export {
  WebSocketMe
}