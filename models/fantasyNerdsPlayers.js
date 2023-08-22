import mongoose, { Schema } from "mongoose";

const nerdSchema = new Schema({
  playerId: Number,
  name: String,
  position: String,
  currentTeam: String,
});

const NerdPlayers =
  mongoose.models.fantasyNerdsPlayers ||
  mongoose.model("NerdPlayers", nerdSchema);

export default NerdPlayers;
