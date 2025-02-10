import Temperatura from '../Models/Temperatura.js';

class ServicioTemperatura {
    model = new Temperatura();

    agregarTemperaturaServicio = async (magnitud, unidad) => {
      const allowedUnits = ['celsius', 'farenheit', 'kelvin'];
      if (typeof magnitud !== 'number' || isNaN(magnitud)) {
        const err = new Error('La magnitud debe ser numérica');
        err.status = 400;
        throw err;
      }
      if (!allowedUnits.includes(unidad.toLowerCase())) {
        const err = new Error('La unidad debe ser "celsius", "farenheit" o "kelvin"');
        err.status = 400;
        throw err;
      }
      return await this.model.create(magnitud, unidad);
    };

    obtenerTemperaturasEnRangoServicio = async (min, max) => {
      const temps = await this.model.getByRange(min, max);
      if (temps.length === 0) {
        const err = new Error('No hay temperaturas en ese rango');
        err.status = 404;
        throw err;
      }
      return temps;
    };
    
}

export default ServicioTemperatura;
