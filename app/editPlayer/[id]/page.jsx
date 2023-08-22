import EditPlayerForm from "@/components/EditPlayerForm";

const url = process.env.LOCAL_URI;

const getPlayerById = async (id) => {
  try {
    const res = await fetch(`${url}/api/players/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json;
  } catch (error) {
    console.log(error);
  }
};

export default async function EditPlayer({ params }) {
  const { id } = params;
  const player = await getPlayerById(id);
  const {
    name,
    position,
    nflTeam,
    fantasyOwner,
    currentYear,
    draftRound,
    roundPick,
  } = player;

  return (
    <EditPlayerForm
      id={id}
      name={name}
      position={position}
      nflTeam={nflTeam}
      fantasyOwner={fantasyOwner}
      currentYear={currentYear}
      draftRound={draftRound}
      roundPick={roundPick}
    />
  );
}
