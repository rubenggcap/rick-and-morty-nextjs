import { Character } from "@/types";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="border rounded p-4">
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Episode: {character.episode[0]}</p>
    </div>
  );
}
