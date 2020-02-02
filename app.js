import SerialPort from 'serialport';
import Readline from '@serialport/parser-readline';
//
import http from 'http';
import express from 'express';
import SocketIO from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = SocketIO.listen(server);

app.use(express.static('public'));
server.listen(3000, () => console.log('server listening on port 3000'));

const signatures = ["", "Lip Balm", "Green Sticker", "Speaker"];

const port = new SerialPort('COM5', { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
  
  parser.on('data', data =>{
    console.log('recognized object:', data);
    io.emit('obj', data.toString());
  });
});