const WebSocket = require('ws');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

const port = new SerialPort('/dev/ttyACM0', { baudRate: 115200 });
const wss = new WebSocket.Server({ ip:'192.168.0.125', port: 8765 });
const motor_power = 250; 

const parser = port.pipe(new Readline({delimiter: '\r\n'}))

function set_power(left, right) {
	/*var direction_left, direction_right;
	if (left >= 0)
		direction_left = 1;
	else
		direction_left = 2;
	
	if (right >= 0)
		direction_right = 1;
	else 
		direction_right = 2;

	port.write(String.fromCharCode(direction_left));
	port.write(String.fromCharCode(Math.abs(left)));
	port.write(String.fromCharCode(direction_right));
	port.write(String.fromCharCode(Math.abs(right)));*/
	//{"command": "set_motor_power", "left_motor": 100, "right_motor": 100}
	var data = {}
	data["command"] = "smp";
	data["left_motor"] = left;
	data["right_motor"] = right;
	var data_str = JSON.stringify(data) + "\n";
	port.write(data_str);
	//console.log("De la nodejs: ", data_str);

}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(message);
	  var name = message;
	 if (name == "front")
        	set_power(motor_power, motor_power);
	  else if (name == "right")
        	set_power(-motor_power, motor_power);
	  else if (name == "back")
        	set_power(-motor_power, -motor_power);
	  else if (name == "left")
        	set_power(motor_power, -motor_power);
	  else if (name == "stop")
		//delay(10);
        	set_power(0,0);
	 //port.flush();
  });
  parser.on('data', function(data){
	//console.log(data)
	ws.send(data)
  });
  ws.send('Connected with the server');
});

// serial

