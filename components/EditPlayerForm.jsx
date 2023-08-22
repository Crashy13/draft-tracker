"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditPlayerForm({
  id,
  name,
  position,
  nflTeam,
  fantasyOwner,
  currentYear,
  draftRound,
  roundPick,
}) {
  const [newName, setNewName] = useState(name);
  const [newPosition, setNewPosition] = useState(position);
  const [newNFLTeam, setNewNFLTeam] = useState(nflTeam);
  const [newFantasyOwner, setNewFantasyOwner] = useState(fantasyOwner);
  const [newCurrentYear, setNewCurrentYear] = useState(currentYear);
  const [newDraftRound, setNewDraftRound] = useState(draftRound);
  const [newRoundPick, setNewRoundPick] = useState(roundPick);

  const url = process.env.LOCAL_URI;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/api/players/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newPosition,
          newNFLTeam,
          newFantasyOwner,
          newCurrentYear,
          newDraftRound,
          newRoundPick,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update player");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Name"
      />
      <input
        onChange={(e) => setNewPosition(e.target.value)}
        value={newPosition}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Position"
      />
      <input
        onChange={(e) => setNewNFLTeam(e.target.value)}
        value={newNFLTeam}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player NFL Team"
      />
      <input
        onChange={(e) => setNewFantasyOwner(e.target.value)}
        value={newFantasyOwner}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Fantasy Owner"
      />
      <input
        onChange={(e) => setNewCurrentYear(e.target.value)}
        value={newCurrentYear}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Current Year"
      />
      <input
        onChange={(e) => setNewDraftRound(e.target.value)}
        value={newDraftRound}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Draft Round"
      />
      <input
        onChange={(e) => setNewRoundPick(e.target.value)}
        value={newRoundPick}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Round Pick"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Player
      </button>
    </form>
  );
}
