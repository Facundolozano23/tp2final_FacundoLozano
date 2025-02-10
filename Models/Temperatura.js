class Temperatura {
  listaTemperaturas = [];
  
  create = async (magnitud, unidad) => {
    const nuevaTemp = { magnitud, unidad };
    this.listaTemperaturas.push(nuevaTemp);
    return nuevaTemp;
  };


  getByRange = async (min, max) => {
    return this.listaTemperaturas.filter(temp => temp.magnitud >= min && temp.magnitud <= max);
  };
}

export default Temperatura;
