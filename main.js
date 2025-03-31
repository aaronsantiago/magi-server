import config from '3lib-config';
import * as magiApi from "magi-lib";
import fs from 'fs';

config.init();
let magiOptions = {};

if (config.get("socketAddress")) {
  magiOptions.socketAddress = config.get("socketAddress");
}
if (config.get("socketPrefix")) {
  magiOptions.socketPrefix = config.get("socketPrefix");
}


let magiRuntime = magiApi.createRuntime({}, magiOptions);

if (config.get("loadRivetProject")) {
  console.log("Loading Rivet project", config.get("loadRivetProject"));
  let rivetProjectText = fs.readFileSync(config.get("loadRivetProject"), { encoding: 'utf8' });
  magiApi.loadRivetProject(magiRuntime, rivetProjectText);
}
if (config.get("loadMagiProject")) {
  console.log("Loading Magi project", config.get("loadMagiProject"));
  let magiProjectText = fs.readFileSync(config.get("loadMagiProject"), { encoding: 'utf8' });
  magiApi.loadMagiProject(magiRuntime, magiProjectText);
}
