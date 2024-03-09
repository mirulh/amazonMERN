import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //username
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    // [1]
    timestamps: true,
  }
);

// [2]
const User = mongoose.model('User', userSchema);
export default User;

/* 

[1] 
whenever a new record is created from the object model, a new field of timestamps will be added into the record as well (createdAt, and updatedAt)

[2]
create a model from the schema. the first parameter "User" is the name of this model, the second parameter is the schema that will be used 


*/
