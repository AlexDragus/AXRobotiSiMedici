import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import RobotInterface from './RobotInterface';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import io from "socket.io-client"

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

ReactDOM.render(<RobotInterface />, document.getElementById('appbody'));

var command_count = 0;
/*var ws;
function connect_to_server(data){ 
	ws = io('ws://192.168.0.125:8765', {transports: ['websocket']});
    ws.on('connect', function() {
        ws.emit('my connect', {data: 'I\'m connected!'});
    });     
}

function send_data_to_server(data){
		ws.emit('my moves', data);
		command_count++;
		if (command_count > 15) {
			connect_to_server(state);
			command_count = 0;
		}
}*/

var socket;
function connect_to_server(data){
	socket = new WebSocket('ws://192.168.0.125:8765');
	socket.addEventListener('open', function (event) {
    	socket.send('Hello server!');
	});

	socket.addEventListener('message', function (event) {
	    console.log('Message from server ', event.data);
	    const read = event.data.toString('utf8');
	    //const sensorsInfo = JSON.parse( read.substring(0, read.length-1) );

		var sensorsInfo = JSON.parse(read);
	    console.log(sensorsInfo);
	    //const sensorsInfo = JSON.parse(event.data);
	    updateSensors(sensorsInfo);
	});

	socket.addEventListener('close', function (event) {
	    console.log('Connection closed with the server');
	    socket.close();
	});
}

function send_data_to_server(data){
	socket.send(data);
}

function computeColor(distance){
	if (distance < 150) {
		return "red";
	} else if (distance < 500) {
		return "yellow";
	} else
		return "green";
}

var sensorColor0;
var sensorColor1;
var sensorColor2;
var sensorColor3;
var sensorColor4;
var sensorColor5;

function computeColorDistanceSensors(sensorsInfo) {
	var sensorDistance0 = sensorsInfo["sensor_0"];
	var sensorDistance1 = sensorsInfo["sensor_1"];
	var sensorDistance2 = sensorsInfo["sensor_2"];
	var sensorDistance3 = sensorsInfo["sensor_3"];
	var sensorDistance4 = sensorsInfo["sensor_4"];
	var sensorDistance5 = sensorsInfo["sensor_5"];
	sensorColor0 = computeColor(sensorDistance0);
	sensorColor1 = computeColor(sensorDistance1);
	sensorColor2 = computeColor(sensorDistance2);
	sensorColor3 = computeColor(sensorDistance3);
	sensorColor4 = computeColor(sensorDistance4);
	sensorColor5 = computeColor(sensorDistance5);
}

function  updateSensors(sensorsInfo){

	computeColorDistanceSensors(sensorsInfo);

	// front ///////////////////////////////////////////////////////////
	if (sensorColor0 == "red" || sensorColor4 == "red") {
		document.getElementById('macheta_senzori_verde_fata').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_fata').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_fata').style.opacity = 1;
	} else if (sensorColor0 == "yellow" || sensorColor4 == "yellow") {
		document.getElementById('macheta_senzori_verde_fata').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_fata').style.opacity = 1;
		document.getElementById('macheta_senzori_rosu_fata').style.opacity = 0;
	} else { // green
		document.getElementById('macheta_senzori_verde_fata').style.opacity = 1;
		document.getElementById('macheta_senzori_galben_fata').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_fata').style.opacity = 0;
	}
	// right ///////////////////////////////////////////////////////////
	if (sensorColor1 == "red") {
		document.getElementById('macheta_senzori_verde_dreapta').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_dreapta').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_dreapta').style.opacity = 1;
	} else if (sensorColor1 == "yellow") {
		document.getElementById('macheta_senzori_verde_dreapta').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_dreapta').style.opacity = 1;
		document.getElementById('macheta_senzori_rosu_dreapta').style.opacity = 0;
	} else { // green
		document.getElementById('macheta_senzori_verde_dreapta').style.opacity = 1;
		document.getElementById('macheta_senzori_galben_dreapta').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_dreapta').style.opacity = 0;
	}
	// back ///////////////////////////////////////////////////////////
	if (sensorColor2 == "red" || sensorColor5 == "red") {
		document.getElementById('macheta_senzori_verde_spate').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_spate').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_spate').style.opacity = 1;
	} else if (sensorColor2 == "yellow" || sensorColor5 == "yellow") {
		document.getElementById('macheta_senzori_verde_spate').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_spate').style.opacity = 1;
		document.getElementById('macheta_senzori_rosu_spate').style.opacity = 0;
	} else { // green
		document.getElementById('macheta_senzori_verde_spate').style.opacity = 1;
		document.getElementById('macheta_senzori_galben_spate').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_spate').style.opacity = 0;
	}
	// left ///////////////////////////////////////////////////////////
	if (sensorColor3 == "red") {
		document.getElementById('macheta_senzori_verde_stanga').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_stanga').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_stanga').style.opacity = 1;
	} else if (sensorColor3 == "yellow") {
		document.getElementById('macheta_senzori_verde_stanga').style.opacity = 0;
		document.getElementById('macheta_senzori_galben_stanga').style.opacity = 1;
		document.getElementById('macheta_senzori_rosu_stanga').style.opacity = 0;
	} else { // green
		document.getElementById('macheta_senzori_verde_stanga').style.opacity = 1;
		document.getElementById('macheta_senzori_galben_stanga').style.opacity = 0;
		document.getElementById('macheta_senzori_rosu_stanga').style.opacity = 0;
	}
}

var prev_state = "connected";
var state;
const keyDownFunction = function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	console.log(keycode);
	prev_state = state;
	/*up*/
	if (keycode == '38'){
		state = "front";
		document.getElementById("up-arrow").style.color = "#34eb71";
	}

	/*right*/
	if (keycode == '39'){
		state = "right";
		document.getElementById("right-arrow").style.color = "#34eb71";
	}

	/*down*/
	if (keycode == '40'){
		state = "back";
		document.getElementById("down-arrow").style.color = "#34eb71";
	}

	/*left*/
	if (keycode == '37'){ 
		state = "left";
		document.getElementById("left-arrow").style.color = "#34eb71";
	}

	/*stop - spacebar*/
	if (keycode == '32'){
		state = "stop";
		document.getElementById("space-arrow").style.color = "#ff0000";
	}

	if (prev_state != state) {
		console.log(state);
		send_data_to_server(state);
	}
}

const keyUpFunction = function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	console.log(keycode);
	prev_state = state;
	/*up*/
	if (keycode == '38'){
		state = "stop";
		document.getElementById("up-arrow").style.color = "#000000";
	}

	/*right*/
	if (keycode == '39'){
		state = "stop";
		document.getElementById("right-arrow").style.color = "#000000";
	}

	/*down*/
	if (keycode == '40'){
		state = "stop";
		document.getElementById("down-arrow").style.color = "#000000";
	}

	/*left*/
	if (keycode == '37'){ 
		state = "stop";
		document.getElementById("left-arrow").style.color = "#000000";
	}

	/*stop - spacebar*/
	if (keycode == '32'){
		state = "stop";
		document.getElementById("space-arrow").style.color = "#000000";
	}
		state = "stop";

	console.log(state);
	send_data_to_server(state);
}

console.log("websockets connected");
connect_to_server("websockets connected");
document.addEventListener("keydown", keyDownFunction, false);
document.addEventListener("keyup", keyUpFunction, false);