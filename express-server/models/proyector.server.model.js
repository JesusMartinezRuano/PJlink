import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  ubiAlias: String,
  ubiInvent: String,
  marca: String,
  modelo: String,
  etiqueta: Number,
  etiquetado: String,
  año: Number,
  sn: String,
  ip: String,
  password: String,
  operable: String,
  observaciones: String
});

export default mongoose.model('Proyector', Schema);

