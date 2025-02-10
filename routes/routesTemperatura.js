import { Router } from "express";
import controllerTemperatura from "../controller/controllerTemperatura.js";

const routesTemperatura = Router();
const controller= new controllerTemperatura();

routesTemperatura.post('/temperaturas', controller.agregarTemperatura);
routesTemperatura.get('/temperaturas/rango', controller.obtenerTemperaturasEnRango);


export default routesTemperatura;