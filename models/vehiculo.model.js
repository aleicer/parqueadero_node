const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const vehiculoSchema = new Schema({
  placa : {
    type: String,
    trim: true, 
    require: 'La placa es obligatoria'
  },
  tipoVehiculo: {
    type: String,
    require: 'Seleccione un tipo de vehiculo'
  }
}, { timestamps: true })

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema)
module.exports = Vehiculo