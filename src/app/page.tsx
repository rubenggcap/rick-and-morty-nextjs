import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types";

async function getCharacters(ids: string[]) {
  const response = await fetch(
    process.env.API_URL + `/character/${ids.toString()}`
  );
  return response.json();
}

export default async function Home() {
  const characters: Character[] = await getCharacters([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);

  return (
    <div>
      <div className="h-96 flex items-center">
        <p className="text-7xl text-center w-full">Rick & Morty</p>
      </div>
      <div className="grid gap-4 grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character + "_card"} character={character} />
        ))}
      </div>
    </div>
  );
}
