import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getPlayers = async () => {
  const url = process.env.LOCAL_URI;
  try {
    const res = await fetch(`${url}/api/players`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch players");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
  }
};

export default async function PlayersList() {
  const { players } = await getPlayers();
  return (
    <>
      {players.map((player) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          key="{player._id}"
        >
          <div>
            <h1 className="font-bold text-xl">
              With pick {player.roundPick} in round {player.draftRound} of the{" "}
              {player.currentYear} Trojan League Fantasy Draft,{" "}
              {player.fantasyOwner} selects:
            </h1>
            <h2
              className="font-bold text-2xl text-green-900
            "
            >
              {player.name}, {player.position} for {player.nflTeam}
            </h2>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={player._id} />
            <Link href={`/editPlayer/${player._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
