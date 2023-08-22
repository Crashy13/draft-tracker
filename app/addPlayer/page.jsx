"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPlayer() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nflTeam, setNFLTeam] = useState("");
  const [fantasyOwner, setFantasyOwner] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [draftRound, setDraftRound] = useState("");
  const [roundPick, setRoundPick] = useState("");

  const url = process.env.LOCAL_URI;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !position ||
      !nflTeam ||
      !fantasyOwner ||
      !currentYear ||
      !draftRound ||
      !roundPick
    ) {
      alert("All inputs required");
      return;
    }
    try {
      const res = await fetch(`${url}/api/players`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          position,
          nflTeam,
          fantasyOwner,
          currentYear,
          draftRound,
          roundPick,
        }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Name"
      />
      <input
        onChange={(e) => setPosition(e.target.value)}
        value={position}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Position"
      />
      <input
        onChange={(e) => setNFLTeam(e.target.value)}
        value={nflTeam}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player NFL Team"
      />
      <input
        onChange={(e) => setFantasyOwner(e.target.value)}
        value={fantasyOwner}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Player Fantasy Owner"
      />
      <input
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Current Year"
      />
      <input
        onChange={(e) => setDraftRound(e.target.value)}
        value={draftRound}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Draft Round"
      />
      <input
        onChange={(e) => setRoundPick(e.target.value)}
        value={roundPick}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Round Pick"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Player
      </button>
    </form>
  );
}
