import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.plugin(uniqueValidator);

const VacantionDaySchema = new Schema({
    day: {
      type: Date,
      unique: 'Vacation day must be unique',
    }
  },
  {timestamps: true},
);

export default mongoose.model('VacantionDay', VacantionDaySchema);