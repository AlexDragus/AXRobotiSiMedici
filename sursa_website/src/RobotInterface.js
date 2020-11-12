import React from 'react';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import PanToolIcon from '@material-ui/icons/PanTool';

function RobotInterface() {
  return (
    <div>
    <Container maxWidth="md" id="container"> 
            <img id="logoproiect" src="logo_proiect.png" height="100" alt="Xeo Hospital Robot"/>
            {/*<img id="videostream" src="hospital_hallway.jpg" alt="stream video" />
            */}<img src="http://192.168.0.125:81/stream.mjpg" width="640" height="480" alt="stream video" />
            
            <table id="arrow-table">
              <tr>
                <td></td>
                <td>
                  <KeyboardArrowUpIcon id="up-arrow"/>
                </td>
                <td></td>
                <td id="macheta_senzori_box" rowspan="3">
                <img class="macheta_senzori" id="macheta_senzori_verde_fata" src="macheta_senzori_verde_fata.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_verde_stanga" src="macheta_senzori_verde_stanga.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_verde_dreapta" src="macheta_senzori_verde_dreapta.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_verde_spate" src="macheta_senzori_verde_spate.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_galben_fata" src="macheta_senzori_galben_fata.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_galben_stanga" src="macheta_senzori_galben_stanga.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_galben_dreapta" src="macheta_senzori_galben_dreapta.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_galben_spate" src="macheta_senzori_galben_spate.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_rosu_fata" src="macheta_senzori_rosu_fata.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_rosu_stanga" src="macheta_senzori_rosu_stanga.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_rosu_dreapta" src="macheta_senzori_rosu_dreapta.png" alt="macheta senzori"/>
                <img class="macheta_senzori" id="macheta_senzori_rosu_spate" src="macheta_senzori_rosu_spate.png" alt="macheta senzori"/>
                </td>
              </tr>
              <tr>
                <td>
                  <KeyboardArrowLeftIcon id="left-arrow"/>
                </td>
                <td>
                  <SpaceBarIcon id="space-arrow"/>
                </td>
                <td>
                  <KeyboardArrowRightIcon id="right-arrow"/>
                  <PanToolIcon id="stop-arrow"/>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <KeyboardArrowDownIcon id="down-arrow"/>
                </td>
                <td></td>
              </tr>
            </table>
    </Container>
    </div>
  );
}

export default RobotInterface;
