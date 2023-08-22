import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema(
  {
    name: String,
    position: String,
    nflTeam: String,
    fantasyOwner: String,
    currentYear: String,
    draftRound: String,
    roundPick: String,
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);

export default Player;
