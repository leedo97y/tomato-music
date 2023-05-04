import { model } from "mongoose";
import { UserSchema } from "../schemas/userSchema";
import bcrypt from "bcrypt";

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = model("User", UserSchema);

export default User;
