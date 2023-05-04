import { Schema } from "mongoose";

export const SongSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    image: { type: String, required: true },
    source: { type: String, required: true },
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
