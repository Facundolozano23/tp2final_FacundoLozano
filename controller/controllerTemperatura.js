import ServicioTemperatura from '../services/ServiceTemperatura.js';


class controllerTemperatura {
    servicio = new ServicioTemperatura();
  
    agregarTemperatura = async (req, res) => {
      try {
        const { magnitud, unidad } = req.body;
        const data = await this.servicio.agregarTemperaturaServicio(Number(magnitud), unidad);
        res.status(200).json({ Msg: data });
      } catch (error) {
        const status = error.status || 500;  
        res.status(status).json({ errorMsg: error.message });
      }
    };
    obtenerTemperaturasEnRango = async (req, res) => {
      try {
        const min = Number(req.query.min);
        const max = Number(req.query.max);
        const data = await this.servicio.obtenerTemperaturasEnRangoServicio(min, max);
        res.status(200).json({ Msg: data });
      } catch (error) {
        const status = error.status || 500; 
        res.status(status).json({ errorMsg: error.message });
      }
    };
  
}

export default controllerTemperatura;
