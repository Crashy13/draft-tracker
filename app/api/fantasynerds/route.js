import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.FANTASYNERDS_URI}`);

  const nerdPlayers = await res.json();

  return NextResponse.json(nerdPlayers);
}
