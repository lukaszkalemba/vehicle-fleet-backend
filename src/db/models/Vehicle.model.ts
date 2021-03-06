import { Schema, model } from 'mongoose';
import { IVehicleSchema } from '~db/types/Vehicle.types';

const VehicleSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, 'Vehicle name is required'],
  },
  type: {
    type: String,
    enum: ['SUV', 'Truck', 'Hybrid'],
    required: [true, 'Vehicle type is required'],
  },
  lat: {
    type: Number,
    required: [true, 'Coordinates are required'],
  },
  lng: {
    type: Number,
    required: [true, 'Coordinates are required'],
  },
  lastConnection: {
    type: Date,
    default: Date.now,
  },
});

export default model<IVehicleSchema>('Vehicle', VehicleSchema);
