import { Injectable } from '@nestjs/common';
import {
  ConnectedSocket,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ path: '/app.io/', transports: ['websocket'] })
@Injectable()
export class EventService {
  @WebSocketServer()
  private server: Socket;

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    console.log(clientId);
    socket.on('disconnect', () => {
      console.log('disconnect ' + clientId);
    });
  }

  eventEmit(procesResponst: any) {
    this.server.emit('process', procesResponst);
  }
}
