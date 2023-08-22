const getNerdPlayers = async () => {
  const url = process.env.LOCAL_URI;
  try {
    const res = await fetch(`${url}/api/fantasynerds`, {
      cache: "no-store",
    });

    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch players");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
  }
};

export default async function FullPlayersList() {
  const nerdPlayers = await getNerdPlayers();
  return (
    <>
      {nerdPlayers.map((nerdPlayer) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          key="{nerdPlayer.playerId}"
        >
          <div>
            <h1 className="font-bold text-xl">{nerdPlayer.name}</h1>
            <h2>{nerdPlayer.position}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
