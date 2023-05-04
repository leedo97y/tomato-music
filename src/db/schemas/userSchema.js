import { Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 4 },
    nickname: {
      type: String,
      required: true,
      default: function () {
        return `user ${Math.floor(Math.random()) * 10}`;
      },
    },
    createdAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

/**
 * user 스키마이다.
 *
 * email, password, nickname, role이 있으며,
 * role은 basic-user가 default 값이다.
 */
