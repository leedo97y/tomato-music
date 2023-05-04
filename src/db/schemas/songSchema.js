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
