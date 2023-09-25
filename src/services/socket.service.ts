import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
    static io: any;
    static server: any;

    constructor() { }

    /**
     * check connection if socket is connected
     * @param server http server
     */
    public static initSocket(server: any) {
        this.server = server;
        this.io = require('socket.io')(server, { origins: '*:*' });
        this.io.on('connection', (_) => {
            console.log("Socket connected");
            this.io.emit('socket-connection', '*--Stablished!--*');
        });
    }

    /**
     * Emits data to client
     * @param event event name
     * @param data data to be emitted
     */
    public static emitEvent(event, data) {
        this.io.emit(event, data)
    }

}