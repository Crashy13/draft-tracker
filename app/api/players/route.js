import connectMongoDB from "@/libs/mongodb";
import Player from "@/models/player";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    position,
    nflTeam,
    fantasyOwner,
    currentYear,
    draftRound,
    roundPick,
  } = await request.json();
  await connectMongoDB();
  await Player.create({
    name,
    position,
    nflTeam,
    fantasyOwner,
    currentYear,
    draftRound,
    roundPick,
  });
  return NextResponse.json({ message: "Player Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const players = await Player.find();
  return NextResponse.json({ players });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Player.findByIdAndDelete(id);
  return NextResponse.json({ message: "Player deleted" }, { status: 200 });
}
