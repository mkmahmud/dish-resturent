import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  username: String,
  id: Number,
  email: String,
  phoneNumber: String,
  password: String,
  role: String,
});

const User = mongoose.models.user || mongoose.model("user", UserSchema);
export default User;
