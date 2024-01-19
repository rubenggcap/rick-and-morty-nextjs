import CharacterCard from "@/components/CharacterCard";
import { notFound } from "next/navigation";

export default async function CharacterDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  );

  const character = await response.json();

  if (!character.error) {
    return <CharacterCard character={character} />;
  }

  if (character.error === "Hey! you must provide an id") {
    notFound();
  } else {
    throw new Error();
  }
}
