import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types";

async function getCharacter(id: string) {
  const response = await fetch(process.env.API_URL + `/character/${id}`);
  return response.json();
}

export default async function CharacterDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const character: Character = await getCharacter(id);
  return <CharacterCard character={character} />;
}
