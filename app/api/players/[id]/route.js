import connectMongoDB from "@/libs/mongodb";
import Player from "@/models/player";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newPosition: position,
    newNFLTeam: nflTeam,
    newFantasyOwner: fantasyOwner,
    newCurrentYear: currentYear,
    newDraftRound: draftRound,
    newRoundPick: roundPick,
  } = await request.json();
  await connectMongoDB();
  await Player.findByIdAndUpdate(id, {
    name,
    position,
    nflTeam,
    fantasyOwner,
    currentYear,
    draftRound,
    roundPick,
  });
  return NextResponse.json({ message: "Player updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const player = await Player.findOne({ _id: id });
  return NextResponse.json({ player }, { status: 200 });
}
