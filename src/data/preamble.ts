export const PREAMBLE = (props:{slug:string, socketUrl:string}) => `
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  ProviderClass
} = require('@bot-whatsapp/bot');
const {
  io
} = require('socket.io-client');
const WORKSPACE_SOCKET_URL = '${props.socketUrl}'
const WORKSPACE_SLUG = '${props.slug}';
class PlaygroundProvider extends ProviderClass {
  constructor() {
    super();
    _defineProperty(this, "socket", void 0);
    _defineProperty(this, "connect", url => {
      const _socket = io(url, {
        reconnectionDelayMax: 10000
      });
      console.log(url)
      this.socket = _socket;
      this.socket.emit('join', {
        slug: WORKSPACE_SLUG
      });
      this.socket.on('pong', arg => console.log('Pong...', arg));
    });
    _defineProperty(this, "delaySendMessage", (miliseconds, eventName, payload) => new Promise(res => setTimeout(() => {
      this.emit(eventName, payload);
      res;
    }, miliseconds)));
    _defineProperty(this, "sendMessage", async (userId, message) => {
      const payload = {
        userId,
        message
      };
      this.socket.emit('ping', {
        ...payload,
        slug: WORKSPACE_SLUG
      });
      return Promise.resolve(payload);
    });
    this.connect(WORKSPACE_SOCKET_URL);
  }
}
module.exports = PlaygroundProvider;
`