import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"

const socketBuilder = new SocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected', user))
    .setOnUserDisconnected((user) => console.log('user disconnected', user))
    .build()

const room = {
    id: Date.now(),
    topic: 'JS Expert'
}

const user = {
    img: 'https://avatars.githubusercontent.com/u/15326732?v=4',
    username: 'Gabriel Modesto'
}

socket.emit(constants.events.JOIN_ROOM)