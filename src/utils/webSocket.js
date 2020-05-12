const token = sessionStorage.getItem("token")
const url = "ws://localhost:8090/webSocket/"+token

let webSocketServer = {
  webSocket: null,
  initWebSocket: function () {
    if(typeof(WebSocket) == "undefined"){
      this.$message({
        message: '您的浏览器不支持websocket',
        type: 'error',
        duration: 2000
      });
      return false;
    }
    this.webSocket = new WebSocket(url);
  },
  sendMessage: function (message) {
    this.webSocket.send(message);
  },
  close: function () {
    if(this.webSocket != null && this.webSocket.readyState == 1){
      this.webSocket.onclose;
    }
  }
}

export default webSocketServer;
